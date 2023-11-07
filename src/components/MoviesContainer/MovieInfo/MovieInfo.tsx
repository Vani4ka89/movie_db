import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {Rating} from "@mui/material";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {posterBaseUrl} from "../../../constants";
import {GenreBadge} from "../../GenreBadge/GenreBadge";
import css from './MovieInfo.module.css';
import {Loading} from "../../Loading/Loading";

interface IProps extends PropsWithChildren {
    movieId: string;
}

const MovieInfo: FC<IProps> = ({movieId}) => {
    const [movie, setMovie] = useState<IMovie>(null);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getById(+movieId).then(({data}) => setMovie(data));
    }, [movieId]);

    if (!movie) return <Loading/>;

    const {id, poster_path, title, original_title, vote_average, overview} = movie;

    const getMovieVideos = () => {
        navigate(`/movies/${id}/video`)
    }

    return (
        <div>
            <div className={css.MovieInfo}>
                <div>
                    <img src={`${posterBaseUrl}${poster_path}`} alt={title}/>
                </div>
                <div className={css.content}>
                    <h1>{original_title}</h1>
                    <GenreBadge/>
                    <p>Rating</p>
                    <div>
                        <Rating
                            name="read-only"
                            defaultValue={vote_average}
                            readOnly max={10}
                            precision={0.1}
                            size='large'
                        />
                    </div>
                    <p>Overview</p>
                    <h5>{overview}</h5>
                    <button className={css.btnPlay} onClick={getMovieVideos}>PLAY</button>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};