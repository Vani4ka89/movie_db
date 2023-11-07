import React, {FC} from 'react';

import {GenresBadgesList, MoviesList} from "../../components";
import {MoviesPagination} from "../../components";
import css from './MoviesPage.module.css';

const MoviesPage: FC = () => {
    return (
        <div className={css.MoviesPage}>
            <GenresBadgesList/>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};