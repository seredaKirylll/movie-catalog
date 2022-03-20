import axios from '../../api/api'
import { Dispatch } from 'redux'
import { Movie, setIsFetching, setListOfMovies } from './movies.actions'
import { AxiosResponse } from 'axios'

interface ResponseData {
    page: number | undefined
    results: Movie[] | undefined
    totalResults: number | undefined
    total_pages: number | undefined
    total_results: number | undefined
}
const getMovies = (currentPage: number, searchValue: string) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))

    const response: AxiosResponse<ResponseData> = await axios.get('/search/movie', {
        params: {
            query: searchValue,
            page: currentPage,
            language: 'en-US',
        },
    })

    const { results, total_results } = response.data

    dispatch(setListOfMovies({ movies: results ?? [], totalCount: total_results ?? 0 }))
    dispatch(setIsFetching(false))
}

export default getMovies
