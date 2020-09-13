import * as React from 'react';
import * as moment from 'moment';
import Modal from 'react-modal';
import useState2 from "../hooks/useState2";
import useModalState from "../hooks/useModalState";

const CurrentDay: React.FC = () => {
    const newNoteModal = useModalState(false);
    const noteText = useState2('');

    function saveNote() {

    }

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
                    value={noteText.value}
                    onChange={e => noteText.setValue(e.target.value)}
                />
                <br/>
                <button onClick={saveNote}>Сохранить</button>
                <button onClick={() => setIsOpen(false)}>Закрыть</button>
            </Modal>
        </>
    );
}

export default CurrentDay;
