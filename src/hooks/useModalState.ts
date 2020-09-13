import {useState} from "react";

export default function useModalState(val: boolean) {
    const [value, setValue] = useState(val);
    return {
        isOpen: () => value,
        open: () => setValue(true),
        close: () => setValue(false),
    };
}
