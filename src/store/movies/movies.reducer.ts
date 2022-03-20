import createReducer from '../createReducer'
import { Action } from '../action'
import { Movie, MoviesActionType, MoviesResponse } from './movies.actions'

export interface MoviesState {
    movies: Movie[]
    currentPage: number
    chunk: number // Count of movies on the page.
    totalCount: number
    isFetching: boolean
    searchValue: string
}

const initialState: MoviesState = {
    movies: [],
    currentPage: 1,
    chunk: 10,
    totalCount: 115,
    isFetching: false,
    searchValue: '',
}

export default createReducer(initialState, {
    [MoviesActionType.SET_CURRENT_PAGE](state: MoviesState, action: Action<number>) {
        return { ...state, currentPage: action.payload }
    },
    [MoviesActionType.SET_LIST_OF_MOVIES](state: MoviesState, action: Action<MoviesResponse>) {
        const { movies, totalCount } = action.payload
        return { ...state, movies, totalCount }
    },
    [MoviesActionType.SET_IS_FETCHING](state: MoviesState, action: Action<boolean>) {
        return { ...state, isFetching: action.payload }
    },
    [MoviesActionType.SET_SEARCH_VALUE](state: MoviesState, action: Action<string>) {
        return { ...state, searchValue: action.payload }
    },
})
