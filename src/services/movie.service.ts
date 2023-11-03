import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovie, IPagination} from "../interfaces";

const movieService = {
    getAll: (): IRes<IPagination<IMovie[]>> => axiosService.get(urls.movies.discover),
    getById: (movieId: number): IRes<IPagination<IMovie>> => axiosService.get(urls.movies.byId(movieId))
}

export {
    movieService
}