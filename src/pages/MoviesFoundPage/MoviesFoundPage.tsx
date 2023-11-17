import {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {BadgesList, MoviesFound, MoviesPagination} from "../../components";
import css from './MoviesFoundPage.module.css';

const MoviesFoundPage: FC = () => {

    const [query, setQuery] = useSearchParams();

    const page = query.get('page');

    useEffect(() => {
        if (!page) {
            setQuery({page: '1'});
        }
    }, [page]);

    return (
        <div className={css.MoviesFoundPage}>
            <BadgesList/>
            <MoviesFound/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesFoundPage};