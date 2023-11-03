import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, overview, poster_path, vote_average} = movie;

    return (
        <div>
            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <div>poster_path: {poster_path}</div>
            <div>vote_average: {vote_average}</div>
        </div>
    );
};

export {Movie};