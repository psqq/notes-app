import MicroEmitter from 'micro-emitter';
import {useEffect, useState} from "react";

let emitter = new MicroEmitter();

function getItem<T = string>(key: string): T | null {
    const val = localStorage.getItem(key);
    if (val == null) return val;
    return JSON.parse(val) as unknown as T;
}

interface Payload<T = string> {
    key: string;
    value: T;
}

export default function useStorage<T = string>(key: string) {
    const [value, setValue] = useState<T | null>(getItem(key));
    useEffect(() => {
        const listener = (payload: Payload<T>) => {
            if (key === payload.key) {
                setValue(payload.value);
            }
        };
        emitter.on('set-item', listener);
        return () => {
            emitter.off('set-item', listener);
        }
    }, [key]);
    return {
        get() {
            return value;
        },
        set(value: any) {
            localStorage.setItem(key, JSON.stringify(value));
            emitter.emit('set-item', {key, value});
        },
    };
}
