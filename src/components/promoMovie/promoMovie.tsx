import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../../store/movie/movie.thunk'
import { AppState } from '../../store/redux.store'
import styles from './promoMovie.module.css'

const PromoMovie = () => {
    const movie = useSelector((state: AppState) => state.movie)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovie(634649))
    }, [])

    return (
        <div className={styles.container}>
            <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
            <div className={styles.content}>
                <div className={styles.originalTitle}>{movie.original_title}</div>
                <div className={styles.overview}>{movie.overview}</div>
                <div>
                    <button className={styles.star} />
                    <span className={styles.voteAverage}>{movie.vote_average}</span>
                </div>
            </div>
        </div>
    )
}

export default PromoMovie
