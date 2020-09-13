import {useState} from "react";
import Note, {createNote} from "../app-types/Note";
import * as moment from 'moment';
import app from "../app";

export default function useNewNote<T>() {
    const [note, setNote] = useState<Note>(createNote());
    return {
        note,
        edit(text: string) {
            setNote({
                ...note,
                text, updatedAt: moment(), createdAt: moment(),
            });
        },
        save() {
            app.notesStorage.save({
                ...note,
                updatedAt: moment(), createdAt: moment(),
            });
        },
    };
}
