const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzYwZjY5NjdkNzljM2I1OWQyNjljYjdjYzc2MzgzYyIsInN1YiI6IjY0NWY5NjY1YTY3MjU0MDE2NGRkODVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2n-Hd6NenF1X71SMmMpGAhXUN9iYopyE22RpKlKKWo';

const baseURL = 'https://api.themoviedb.org/3';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

const discover = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';

const urls = {
    movies: {
        discover,
        byId: (movieId: number): string => `${movie}/${movieId}`
    },
    genres: {
        list: genres
    }
}

export {
    accessToken,
    baseURL,
    posterBaseUrl,
    urls
}