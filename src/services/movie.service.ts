import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovie, IPagination} from "../interfaces";

const movieService = {
    getAll: (page: number): IRes<IPagination<IMovie[]>> => axiosService.get(urls.movies.discover, {params: {page}}),
    getById: (movieId: number): IRes<IMovie> => axiosService.get(urls.movies.byId(movieId))
}

export {
    movieService
}