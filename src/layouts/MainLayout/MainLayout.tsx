import {FC, PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import {Footer} from "../../components/Footer/Footer";

interface IProps extends PropsWithChildren {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};