import * as moment from 'moment';
import {Moment} from 'moment';
import shortid from "shortid";

export default interface Note {
    __typename: 'Note';
    id: string;
    text: string;
    createdAt: Moment;
    updatedAt: Moment;
}

export function createNote(
    text: string = '',
    createdAt: Moment = moment(),
    updatedAt: Moment = moment(),
): Note {
    return {
        __typename: "Note",
        id: shortid(),
        text,
        createdAt,
        updatedAt,
    };
}
