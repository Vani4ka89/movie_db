import {useAppContext} from "./useAppContext";

const useSetTheme = () => {
    const {state} = useAppContext();
    const [darkTheme, setDarkTheme] = state;

    return {
        darkTheme,
        setDarkTheme
    }
};

export {useSetTheme};