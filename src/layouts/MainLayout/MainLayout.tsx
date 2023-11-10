import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";
import css from './MainLayout.module.css';
import {useSetTheme} from "../../hooks/useSetTheme";

const MainLayout: FC = () => {
    const {darkTheme, setDarkTheme} = useSetTheme();

    const changeTheme = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <div className={`${darkTheme ? `${css.MainLayoutDark}` : `${css.MainLayoutLight}`}`}>
            <Header darkTheme={darkTheme} changeTheme={changeTheme}/>
            <Outlet/>
            <Footer darkTheme={darkTheme}/>
        </div>
    );
};

export {MainLayout};