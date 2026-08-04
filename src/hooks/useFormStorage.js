import { useState, useEffect } from "react";

function useFormStorage(key, initialValue = "") {

    const [value, setValue] = useState(() => {
        const saved = sessionStorage.getItem(key);

        if (saved !== null) {
            return saved;
        }

        return initialValue;
    });

    useEffect(() => {
        sessionStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default useFormStorage;