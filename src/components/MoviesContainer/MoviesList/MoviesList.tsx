import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        movieService.getAll().then(({data: {page, results, total_results, total_pages}}) => setMovies(results))
    }, []);

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};