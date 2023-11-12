import React, {FC} from 'react';

import {BadgesList, MoviesOfGenre, MoviesPagination} from "../../components";
import css from './MoviesOfGenrePage.module.css';

const MoviesOfGenrePage: FC = () => {
    return (
        <div className={css.MoviesOfGenrePage}>
            <BadgesList/>
            <MoviesOfGenre/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesOfGenrePage};