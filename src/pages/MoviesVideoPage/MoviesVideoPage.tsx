import {FC, PropsWithChildren} from 'react';
import {MoviesVideo} from "../../components/MoviesContainer/MoviesVideo/MoviesVideo";

interface IProps extends PropsWithChildren {

}

const MoviesVideoPage: FC<IProps> = () => {
    return (
        <div>
            <MoviesVideo/>
        </div>
    );
};

export {MoviesVideoPage};