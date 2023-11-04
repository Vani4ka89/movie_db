import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenreBadge, IGenreBadgePagination} from "../interfaces/genreBadge.interface";

const genreService = {
    getAll: (): IRes<IGenreBadgePagination<IGenreBadge[]>> => axiosService.get(urls.genres.list)
}

export {
    genreService
}