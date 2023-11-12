import {FC, useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieService} from "../../../services";
import css from './MoviesOfGenre.module.css';
import {Loading} from "../../Loading/Loading";

const MoviesOfGenre: FC = () => {
    const {genreId} = useParams<{ genreId: string }>();
    const [query,] = useSearchParams({page: '1'});
    const [movies, setMovies] = useState<IMovie[]>([]);
    const page = +query.get('page') ? +query.get('page') : 1;

    useEffect(() => {
        movieService.getMoviesOfGenre(+genreId, page).then(({data: {results}}) => setMovies(results));
    }, [genreId, page]);

    return (
        <div className={css.MoviesOfGenre}>
            {movies ? movies.map(movie => < MoviesListCard key={movie.id} movie={movie}/>) : <Loading/>}
        </div>
    );
};

export {MoviesOfGenre};