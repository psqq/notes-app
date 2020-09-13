import * as React from 'react';
import * as moment from 'moment';
import Modal from 'react-modal';
import useModalState from "../hooks/useModalState";
import useNewNote from "../hooks/useNewNote";

const CurrentDay: React.FC = () => {
    const newNoteModal = useModalState(false);
    const newNote = useNewNote();

    return (
        <>
            <h1>{moment().format('LL')}</h1>
            <button
                onClick={() => newNoteModal.open()}
            >
                Добавить запись
            </button>
            <Modal
                isOpen={newNoteModal.isOpen()}
                onRequestClose={() => newNoteModal.close()}
            >
                <h2>Новая запись</h2>
                <textarea
                    value={newNote.note.text}
                    onChange={e => newNote.save()}
                />
                <br/>
                <button onClick={() => newNote.save()}>Сохранить</button>
                <button
                    onClick={() => newNoteModal.close()}
                >
                    Закрыть
                </button>
            </Modal>
        </>
    );
}

export default CurrentDay;
