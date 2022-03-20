import { Action } from '../action'

export enum MoviesActionType {
    SET_LIST_OF_MOVIES = 'SET_LIST_OF_MOVIES',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_IS_FETCHING = 'SET_IS_FETCHING',
    SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
}

export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<Number>
    id: number
    original_language: String
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: false
    vote_average: number
    vote_count: number
}

export interface MoviesResponse {
    movies: Movie[]
    totalCount: number
}

export const setListOfMovies = (movies: MoviesResponse): Action<MoviesResponse> => ({
    type: MoviesActionType.SET_LIST_OF_MOVIES,
    payload: movies,
})

export const setCurrentPage = (currentPage: number): Action<number> => ({
    type: MoviesActionType.SET_CURRENT_PAGE,
    payload: currentPage,
})

export const setIsFetching = (isFetching: boolean): Action<boolean> => ({
    type: MoviesActionType.SET_IS_FETCHING,
    payload: isFetching,
})
export const setSearch = (searchValue: string): Action<string> => ({
    type: MoviesActionType.SET_SEARCH_VALUE,
    payload: searchValue,
})
