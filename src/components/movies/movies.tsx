import { useSelector } from 'react-redux'
import { Movie as MovieDto } from '../../store/movies/movies.actions'
import { AppState } from '../../store/redux.store'
import Preloader from '../common/preolder/preloader'
import Movie from './movie/movie'
import styles from './movies.module.css'

const Movies = () => {
    const Movies = useSelector((state: AppState) => state.movies.movies)
    const isFetching = useSelector((state: AppState) => state.movies.isFetching)
    const totalCount = useSelector((state: AppState) => state.movies.totalCount)
    const searchValue = useSelector((state: AppState) => state.movies.searchValue)

    if (isFetching) {
        return <Preloader />
    }

    return (
        <div className={styles.moviesContainer}>
            <div>
                <div className={styles.seachRezult}>
                    You searched for: {searchValue}, {totalCount} result found{' '}
                </div>
                <div className={styles.listMovies}>
                    {Movies.map((u: MovieDto) => (
                        <Movie movie={u} key={u.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movies
