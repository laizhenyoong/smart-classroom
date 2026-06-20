// The dashboard's data model. Everything the app creates is an Artifact with a
// `type`; new features (quizzes, lessons…) add a type, not a new storage layer.
export type ArtifactType = "board";

export interface Artifact {
  id: string;
  type: ArtifactType;
  title: string;
  createdAt: number;
  updatedAt: number;
}

// Storage lives behind this interface so today's localStorage can become a
// cloud/DB call later without touching any caller. Async now for that reason.
export interface ArtifactStore {
  list(): Promise<Artifact[]>;
  get(id: string): Promise<Artifact | undefined>;
  create(type: ArtifactType, title: string): Promise<Artifact>;
  rename(id: string, title: string): Promise<void>;
  remove(id: string): Promise<void>;
}

const KEY = "smart-classroom.artifacts";

function readAll(): Artifact[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeAll(artifacts: Artifact[]) {
  localStorage.setItem(KEY, JSON.stringify(artifacts));
}

export const localArtifactStore: ArtifactStore = {
  async list() {
    return readAll().sort((a, b) => b.updatedAt - a.updatedAt);
  },

  async get(id) {
    return readAll().find((a) => a.id === id);
  },

  async create(type, title) {
    const now = Date.now();
    const artifact: Artifact = { id: crypto.randomUUID(), type, title, createdAt: now, updatedAt: now };
    writeAll([artifact, ...readAll()]);
    return artifact;
  },

  async rename(id, title) {
    writeAll(readAll().map((a) => (a.id === id ? { ...a, title, updatedAt: Date.now() } : a)));
  },

  async remove(id) {
    writeAll(readAll().filter((a) => a.id !== id));
  },
};
