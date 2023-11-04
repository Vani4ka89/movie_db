import React, {FC} from 'react';

import {MoviesList} from "../../components";
import {MoviesPagination} from "../../components/MoviesContainer/MoviesPagination/MoviesPagination";
import css from './MoviesPage.module.css';
import {GenresBadgesList} from "../../components/BadgesContainer/GenreBadgeList/GenreBadgeList";

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