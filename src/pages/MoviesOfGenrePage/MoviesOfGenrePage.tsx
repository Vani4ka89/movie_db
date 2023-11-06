import React, {FC} from 'react';

import {GenresBadgesList, MoviesOfGenre, MoviesPagination} from "../../components";
import css from './MoviesOfGenrePage.module.css';

const MoviesOfGenrePage: FC = () => {
    return (
        <div className={css.MoviesOfGenrePage}>
            <GenresBadgesList/>
            <MoviesOfGenre/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesOfGenrePage};