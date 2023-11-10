import {useContext} from "react";

import {Context} from "../hoc";

const useSetTheme = () => {
    const {state} = useContext(Context);
    const [darkTheme, setDarkTheme] = state;

    return {
        darkTheme,
        setDarkTheme
    }
};

export {useSetTheme};