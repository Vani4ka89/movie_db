import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../../../services";
import {IVideo} from "../../../interfaces/video.interface";
import {Video} from "../Video/Video";

interface IProps extends PropsWithChildren {

}

const MoviesVideo: FC<IProps> = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const [videos, setVideos] = useState<IVideo[]>([]);
    const trailers = videos.filter(trailer => trailer.type === 'Trailer');

    useEffect(() => {
        movieService.getVideo(+movieId).then(({data: {results}}) => setVideos(results))
    }, [movieId]);

    return (
        <div>
            {trailers.map(trailer => <Video key={trailer.id} trailer={trailer}/>)}
        </div>
    );
};

export {MoviesVideo};