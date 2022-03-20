import { Movie as MovieDto } from '../../../store/movies/movies.actions'
import poster from '../../../assets/images/kinoimg.jpg'
import styles from './movie.module.css'

interface Props {
    movie: MovieDto
}

const Movie = (props: Props) => {
    const { movie } = props
    return (
        <div className={styles.movieInner}>
            <img
                className={styles.movieImg}
                alt="userIcon"
                src={
                    movie.backdrop_path !== null
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                }
            />
            <div className={styles.description}>
                <div className={styles.movieTitle}> {movie.original_title}</div>
                <div>Year: {movie.release_date}</div>
                <div>imdbID: {movie.id}</div>
            </div>
        </div>
    )
}

export default Movie
