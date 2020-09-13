import {default as IApp} from "../app-types/App";
import NotesStorage from "../app-types/NotesStorage";
import NotesLocalStorage from "./NotesLocalStorage";

export default class App implements IApp {
    notesStorage: NotesStorage;

    constructor() {
        this.notesStorage = new NotesLocalStorage();
    }
}