import {useState} from "react";

export default function useState2<T>(val: T) {
    const [value, setValue] = useState<T>(val);
    return {value, setValue};
}
