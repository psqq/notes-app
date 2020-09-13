import NotesStorage from "../app-types/NotesStorage";
import Note from "../app-types/Note";

export default class NotesLocalStorage implements NotesStorage {
    add(note: Note): void {
    }

    getAll(): Note[] {

        return [];
    }

}
