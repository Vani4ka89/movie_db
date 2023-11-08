import {useContext} from "react";

import {Context} from "../hoc/ContextProvider";

export const useAppContext = () => useContext(Context);