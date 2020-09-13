import * as React from 'react';
import useStorage from "../hooks/useStorage";

const Password: React.FC = () => {
    const password = useStorage('password');
    return (
        <>
            <h1>Пароль</h1>
            Текущий пароль:
            <input
                type="text"
                value={password.get() || ''}
                onChange={e => password.set(e.target.value)}
            />
            <button>Зашифровать записи</button>
            <button>Расшифровать записи</button>
        </>
    );
}

export default Password;
