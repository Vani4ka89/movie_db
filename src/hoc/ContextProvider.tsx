import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IProps extends PropsWithChildren {}

const Context = createContext(null);

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useState(true);
    const [searchTerm, setSearchTerm] = useState(null);

    return (
        <div>
            <Context.Provider value={{state, searchTerm, setSearchTerm}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};