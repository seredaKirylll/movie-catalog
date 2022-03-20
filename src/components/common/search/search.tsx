import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setCurrentPage } from '../../../store/movies/movies.actions'
import { AppState } from '../../../store/redux.store'
import styles from './search.module.css'
import getMovies from '../../../store/movies/movies.thunk'

const Search = () => {
    const [searchValue, setSearchValue] = useState('a')
    const currentPage = useSelector((state: AppState) => state.movies.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies(currentPage, searchValue))
    }, [currentPage, searchValue, dispatch])

    return (
        <div className={styles.form}>
            <input
                className={styles.input}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    dispatch(setCurrentPage(1))
                }}
                defaultValue={searchValue}
                type="text"
                placeholder="Find a movie"
            />
            <div className={styles.lupa}></div>
        </div>
    )
}

export default Search
