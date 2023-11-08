import {useAppContext} from "./useAppContext";

const useSearchTerm = () => {
    const [searchTerm, setSearchTerm] = useAppContext();

    return {
        searchTerm,
        setSearchTerm
    }
};

export {useSearchTerm};