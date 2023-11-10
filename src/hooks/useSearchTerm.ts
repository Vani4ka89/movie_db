import {useContext} from "react";

import {Context} from "../hoc";

const useSearchTerm = () => {
    const [searchTerm, setSearchTerm] = useContext(Context);

    return {
        searchTerm,
        setSearchTerm
    }
};

export {useSearchTerm};