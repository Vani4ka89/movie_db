import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../../services";
import {useSearchTerm} from "../../../hooks/useSearchTerm";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesFound.module.css';

interface IProps extends PropsWithChildren {

}

const MoviesFound: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const {searchTerm} = useSearchTerm();
    const [query,] = useSearchParams({page: '1'});
    const page = +query.get('page') ? +query.get('page') : 1;

    useEffect(() => {
        movieService.getFoundMovies(searchTerm, page).then(({data: {results}}) => setMovies(results));
    }, [searchTerm, page]);

    return (
        <div className={css.MoviesFound}>
            {movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesFound};