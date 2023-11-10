import {FC, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";
import css from './MainLayout.module.css';

const MainLayout: FC = () => {
    const [lightTheme, setLightTheme] = useState<boolean>(true);

    const setTheme = () => {
        setLightTheme(prev => !prev)
    }

    return (
        <div className={`${lightTheme ? `${css.MainLayoutLight}` : `${css.MainLayoutDark}`}`}>
            <Header lightTheme={lightTheme} setTheme={setTheme}/>
            <Outlet/>
            <Footer lightTheme={lightTheme}/>
        </div>
    );
};

export {MainLayout};