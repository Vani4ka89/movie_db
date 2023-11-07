import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {Rating} from "@mui/material";

import {IMovie} from "../../../interfaces";
import {posterBaseUrl} from "../../../constants";
import css from './MoviesListCard.module.css';

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, title, backdrop_path, release_date, poster_path, vote_average} = movie;
    const navigate = useNavigate();

    const getMovieInfo = () => {
        navigate(`/movies/${id}`);
    };

    return (
        <div key={id} onClick={getMovieInfo}>
            {backdrop_path &&
                <div className={css.MoviesListCard}>
                    <div className={css.imageBlock}>
                        <img src={`${posterBaseUrl}/${poster_path}`} alt={title}/>
                    </div>
                        <h5>{title}</h5>
                    {/*<div className={css.cardContent}>*/}
                        <div className={css.additionalData}>
                            <div>
                                <Rating name="read-only" defaultValue={vote_average} readOnly max={10} precision={0.5}
                                        size='small'/>
                            </div>
                            <div className={css.year}>
                                {release_date?.substring(0, 4)}
                            </div>
                        </div>
                    {/*</div>*/}
                </div>}
        </div>
    );
};

export {MoviesListCard};