import { MovieActionType } from './movie/movie.actions'
import { MoviesActionType } from './movies/movies.actions'

//add more ActionTypes here.

export type ActionType = MoviesActionType | MovieActionType

export interface Action<T> {
    type: ActionType
    payload: T
}
