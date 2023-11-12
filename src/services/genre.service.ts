import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenreBadge, IGenreBadgePagination} from "../interfaces";

const genreService = {
    getAll: (): IRes<IGenreBadgePagination<IGenreBadge[]>> => {
        return axiosService.get(urls.genres.list);
    }
}

export {genreService};