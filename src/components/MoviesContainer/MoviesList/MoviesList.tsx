import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    let [query,] = useSearchParams({page: '1'});

    const page = +query.get('page');

    useEffect(() => {
        movieService.getAll(page).then(({data: {results}}) => setMovies(results))
    }, [page]);

    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};