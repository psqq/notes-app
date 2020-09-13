import Note from "./Note";

export default interface NotesStorage {
    save(note: Note): void;

    getAll(): Note[];

    getNoteById(id: string): Note|null;
}
