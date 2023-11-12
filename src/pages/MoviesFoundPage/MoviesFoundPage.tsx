import {FC} from 'react';

import {BadgesList, MoviesFound, MoviesPagination} from "../../components";
import css from './MoviesFoundPage.module.css';

const MoviesFoundPage: FC = () => {
    return (
        <div className={css.MoviesFoundPage}>
            <BadgesList/>
            <MoviesFound/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesFoundPage};