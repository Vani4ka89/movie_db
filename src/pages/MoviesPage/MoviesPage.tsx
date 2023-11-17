import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {BadgesList, MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css';

const MoviesPage: FC = () => {

    const [query, setQuery] = useSearchParams();

    const page = query.get('page');

    useEffect(() => {
        if (!page) {
            setQuery({page: '1'});
        }
    }, [page]);

    return (
        <div className={css.MoviesPage}>
            <BadgesList/>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};