import {useState} from "react";
import Note, {createNote} from "../app-types/Note";

export default function useNote<T>(): Note {
    const [note, setNote] = useState<Note>(createNote());
    return {value, setValue};
}
