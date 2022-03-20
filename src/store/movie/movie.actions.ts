import { Action } from '../action'

export enum MovieActionType {
    SET_MOVIE = 'SET_MOVIE',
}

export interface Movie {
    original_title: string
    overview: string
    vote_average: number
    poster_path: string
    backdrop_path: string
}

export const setMovie = (movie: Movie): Action<Movie> => ({
    type: MovieActionType.SET_MOVIE,
    payload: movie,
})
