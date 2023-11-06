import {useContext} from 'react';

import {Context} from "../hoc/ContextProvider";

const useSearchTerm = () => {
    const [searchTerm, setSearchTerm] = useContext(Context);

    return {
        searchTerm,
        setSearchTerm
    }
};

export {useSearchTerm};