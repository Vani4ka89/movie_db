import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {BadgesList, MoviesOfGenre, MoviesPagination} from "../../components";
import css from './MoviesOfGenrePage.module.css';

const MoviesOfGenrePage: FC = () => {

    const [query, setQuery] = useSearchParams();

    const page = query.get('page');

    useEffect(() => {
        if (!page) {
            setQuery({page: '1'});
        }
    }, [page]);

    return (
        <div className={css.MoviesOfGenrePage}>
            <BadgesList/>
            <MoviesOfGenre/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesOfGenrePage};