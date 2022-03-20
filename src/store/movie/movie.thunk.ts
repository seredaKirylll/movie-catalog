import axios from '../../api/api'
import { Dispatch } from 'redux'
import { Movie, setMovie } from './movie.actions'
import { AxiosResponse } from 'axios'
import { setIsFetching } from '../movies/movies.actions'

export const getMovie = (movieId: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))

    const response: AxiosResponse<Movie> = await axios.get(`/movie/${movieId}`, {
        params: {
            language: 'en-US',
        },
    })

    const movie: Movie = {
        original_title: response.data.original_title,
        overview: response.data.overview,
        vote_average: response.data.vote_average,
        poster_path: response.data.poster_path,
        backdrop_path: response.data.backdrop_path,
    }

    dispatch(setMovie(movie))
    dispatch(setIsFetching(false))
}
