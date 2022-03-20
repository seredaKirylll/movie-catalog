import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import movieReducer, { MovieState } from './movie/movie.reducer'
import moviesReducer, { MoviesState } from './movies/movies.reducer'

let reducers = combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
})

export interface AppState {
    movies: MoviesState
    movie: MovieState
}

export default createStore(reducers, applyMiddleware(thunk))
