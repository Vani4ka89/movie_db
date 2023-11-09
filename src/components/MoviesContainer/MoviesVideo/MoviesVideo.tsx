import {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../../../services";
import {IVideo} from "../../../interfaces";
import {Video} from "../Video/Video";

const MoviesVideo: FC = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const [videos, setVideos] = useState<IVideo[]>([]);
    const trailers = videos.filter(trailer => trailer.type === 'Trailer');

    useEffect(() => {
        movieService.getVideo(+movieId).then(({data: {results}}) => setVideos(results))
    }, [movieId]);

    return (
        <div>
            {trailers && trailers.map(trailer => <Video key={trailer.id} trailer={trailer}/>)}
        </div>
    );
};

export {MoviesVideo};