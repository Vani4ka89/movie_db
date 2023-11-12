import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesFoundPage, MoviesOfGenrePage, MoviesPage, MoviesVideoPage} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:movieId', element: <MovieInfoPage/>},
            {path: 'movies/genre/:genreId', element: <MoviesOfGenrePage/>},
            {path: 'movies/search', element: <MoviesFoundPage/>},
            {path: 'movies/:movieId/video', element: <MoviesVideoPage/>}
        ]
    }
])

export {router};