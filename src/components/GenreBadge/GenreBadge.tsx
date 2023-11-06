import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import css from './GenreBadge.module.css';

const GenreBadge = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const [movie, setMovie] = useState<IMovie>(null);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getById(+movieId).then(({data}) => setMovie(data));
    }, [movieId])

    if (!movie) {
        return <div>Loading...</div>
    }

    const {genres} = movie;

    const getGenreMovies = (genreId: number) => {
        navigate(`/movies/genre/${genreId}`);
    }

    return (
        <div className={css.GenreBadge}>
            {genres.map(genre => <button onClick={() => getGenreMovies(genre.id)}>{genre.name}</button>)}
        </div>
    );
};

export {GenreBadge};