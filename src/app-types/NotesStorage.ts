import Note from "./Note";

export default interface NotesStorage {
    add(note: Note): void;

    getAll(): Note[];
}
