import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';
import sun from '../../assets/images/free-icon-sun-5247953.png';
import moon from '../../assets/images/free-icon-moon-3599494.png';
import {useSearchTerm} from "../../hooks/useSearchTerm";

const Header = () => {
    const navigate = useNavigate();
    const {searchTerm, setSearchTerm} = useSearchTerm();
    const [lightTheme, setLightTheme] = useState<boolean>(false);

    const searchMovies = async (e: ReturnType<typeof Object>) => {
        e.preventDefault();
        await setSearchTerm(e.target.value);
        if (e.target.value) {
            navigate('/movies/search');
        } else {
            navigate('/movies');
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    };

    const doneScroll = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const setTheme = () => {
        setLightTheme(prev => !prev)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"
             style={{
                 position: 'sticky',
                 top: '0',
                 zIndex: '9',
                 width: '100%',
                 backgroundColor: 'darkgray',
                 background: 'black',
                 opacity: '0.8'
             }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={'home'} style={{color: 'white'}}></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link shine" to={''} style={{color: 'white'}}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active shine" onClick={doneScroll} aria-current="page"
                                     to={'/movies'}
                                     style={{color: 'darkblue'}}>
                                Movies
                            </NavLink>
                        </li>
                        <img className={css.themeImg} src={lightTheme ? moon : sun} onClick={setTheme}
                             alt={'theme-logo'}/>
                    </ul>
                    <div className={css.logo}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxOqXuRWoYenOK3CKWtqYmth9K_EaQ5FmoA&usqp=CAU"
                            alt="logo"/>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   style={{color: "darkgreen", fontWeight: "bolder"}}
                                   aria-label="Search"
                                   value={searchTerm}
                                   onChange={searchMovies}/>
                            {/*<button className="btn btn-outline-success" type="submit" onClick={movieSearch}>Search*/}
                            {/*</button>*/}
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export {Header};