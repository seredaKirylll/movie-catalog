import createReducer from '../createReducer'
import { Action } from '../action'
import { Movie, MovieActionType } from './movie.actions'

export interface MovieState {
    original_title: string
    overview: string
    vote_average: number | null
    poster_path: string
    backdrop_path: string
}

const initialState: MovieState = {
    original_title: '',
    overview: '',
    vote_average: null,
    poster_path: '',
    backdrop_path: '',
}

export default createReducer(initialState, {
    [MovieActionType.SET_MOVIE](state: MovieState, action: Action<Movie>) {
        return {
            ...state,
            original_title: action.payload.original_title,
            overview: action.payload.overview,
            vote_average: action.payload.vote_average,
            poster_path: action.payload.poster_path,
            backdrop_path: action.payload.backdrop_path,
        }
    },
})
