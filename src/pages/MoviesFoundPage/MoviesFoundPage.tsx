import {FC, PropsWithChildren} from 'react';

import {GenresBadgesList, MoviesFound, MoviesPagination} from "../../components";
import css from './MoviesFoundPage.module.css';

interface IProps extends PropsWithChildren {

}

const MoviesFoundPage: FC<IProps> = () => {
    return (
        <div className={css.MoviesFoundPage}>
            <GenresBadgesList/>
            <MoviesFound/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesFoundPage};