import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {Rating} from "@mui/material";

import {IMovie} from "../../../interfaces";
import {posterBaseUrl} from "../../../constants";
import css from './MoviesListCard.module.css';
import {useSetTheme} from "../../../hooks/useSetTheme";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, title, backdrop_path, release_date, poster_path, vote_average} = movie;
    const navigate = useNavigate();
    const {darkTheme} = useSetTheme();

    const getMovieInfo = () => {
        navigate(`/movies/${id}`);
    };

    return (
        <div key={id} onClick={getMovieInfo}>
            {backdrop_path &&
                <div
                    className={`${darkTheme ? `${css.MoviesListCardDark}` : `${css.MoviesListCardLight}`}`}>
                    <div className={css.imageBlock}>
                        <img src={`${posterBaseUrl}/${poster_path}`} alt={title}/>
                    </div>
                    <h5 className={`${darkTheme ? `${css.titleLight}` : `${css.titleDark}`}`}>{title}</h5>
                    <div className={css.additionalData}>
                        <div>
                            <Rating
                                name="read-only"
                                defaultValue={vote_average}
                                readOnly
                                max={10}
                                precision={0.5}
                                size='small'
                                style={{color: '#50cdf5', fontSize: '17px'}}
                            />
                        </div>
                        <div
                            className={`${darkTheme ? `${css.yearLight}` : `${css.yearDark}`}`}>{release_date?.substring(0, 4)}</div>
                    </div>
                </div>}
        </div>
    );
};

export {MoviesListCard};