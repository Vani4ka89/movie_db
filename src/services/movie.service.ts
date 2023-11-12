import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovie, IPagination, IVideo, IVideoPagination} from "../interfaces";

const movieService = {
    getAll: (page: number): IRes<IPagination<IMovie[]>> => {
        return axiosService.get(urls.movies.discover, {params: {page}});
    },
    getById: (movieId: number): IRes<IMovie> => {
        return axiosService.get(urls.movies.byId(movieId));
    },
    getMoviesOfGenre: (genreId: number, page: number): IRes<IPagination<IMovie[]>> => {
        return axiosService.get(urls.genres.moviesOfGenre(genreId), {params: {page}});
    },
    getFoundMovies: (searchTerm: string | number, page: number): IRes<IPagination<IMovie[]>> => {
        return axiosService.get(urls.movies.search(searchTerm), {params: {page}});
    },
    getVideo: (movieId: number): IRes<IVideoPagination<IVideo[]>> => {
        return axiosService.get(urls.movies.video(movieId));
    }
}

export {movieService};