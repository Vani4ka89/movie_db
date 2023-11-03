import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        movieService.getAll().then(({data: {results}}) => setMovies(results))
    }, []);

    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};