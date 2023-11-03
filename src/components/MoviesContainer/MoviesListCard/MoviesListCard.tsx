import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../../interfaces";
import {posterBaseUrl} from "../../../constants";
import css from './MoviesListCard.module.css';

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {title, overview, poster_path, vote_average} = movie;

    return (
        <div className={css.MoviesListCard}>
            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <img src={`${posterBaseUrl}/${poster_path}`} alt={title}></img>
            <div>vote_average: {vote_average}</div>
        </div>
    );
};

export {MoviesListCard};