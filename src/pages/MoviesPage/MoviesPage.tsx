import React, {FC} from 'react';

import {BadgesList, MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css';

const MoviesPage: FC = () => {
    return (
        <div className={css.MoviesPage}>
            <BadgesList/>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};