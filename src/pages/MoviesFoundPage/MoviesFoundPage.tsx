import {FC} from 'react';

import {GenresBadgesList, MoviesFound, MoviesPagination} from "../../components";
import css from './MoviesFoundPage.module.css';

const MoviesFoundPage: FC = () => {
    return (
        <div className={css.MoviesFoundPage}>
            <GenresBadgesList/>
            <MoviesFound/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesFoundPage};