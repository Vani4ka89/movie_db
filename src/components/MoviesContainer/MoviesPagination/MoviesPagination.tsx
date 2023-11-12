import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './MoviesPagination.module.css';

const MoviesPagination: FC = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = +query.get('page') ? +query.get('page') : 1;

    const prevPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault();
        if (page <= 1) {
            return
        }
        setQuery(prev => ({...prev, page: page - 1}));
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const nextPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault();
        setQuery(prev => ({...prev, page: page + 1}));
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const doubleNextPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault();
        setQuery(prev => ({...prev, page: page + 2}));
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className={css.MoviesPagination}>
            <button style={{display: page <= 1 ? "none" : "block"}} onClick={prevPage}>prev</button>
            <button className="page-link">{page}</button>
            <button className="page-link" onClick={nextPage}>{page + 1}</button>
            <button className="page-link" onClick={doubleNextPage}>{page + 2}</button>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {MoviesPagination};