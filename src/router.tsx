import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesOfGenrePage, MoviesPage} from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MovieInfoPage} from "./pages/MovieInfoPage/MovieInfoPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:movieId', element: <MovieInfoPage/>},
            {path: 'movies/genre/:genreId', element: <MoviesOfGenrePage/>}
        ]
    }
])

export {
    router
}