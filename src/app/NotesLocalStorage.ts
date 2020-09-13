import NotesStorage from "../app-types/NotesStorage";
import Note from "../app-types/Note";

export default class NotesLocalStorage implements NotesStorage {
    save(note: Note): void {
    }

    getAll(): Note[] {

        return [];
    }

}
