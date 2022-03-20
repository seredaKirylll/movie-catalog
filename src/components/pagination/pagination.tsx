import cn from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store/redux.store'
import { setCurrentPage } from '../../store/movies/movies.actions'
import styles from './pagination.module.css'

function Pagination() {
    const currentPage = useSelector((state: AppState) => state.movies.currentPage)
    const totalCount = useSelector((state: AppState) => state.movies.totalCount)
    const chunk = useSelector((state: AppState) => state.movies.chunk)
    const dispatch = useDispatch()
    const isFetching = useSelector((state: AppState) => state.movies.isFetching)
    const [portionNumber, setPortionNumber] = useState(1)
    const [pages, setPages] = useState<number[]>([])

    const pagesCount = Math.ceil(totalCount / 20) //20 movies on page

    const calculateCountOfPages = useCallback(() => {
        const result = []
        for (let i = 0; i <= pagesCount; i++) {
            result.push(i)
        }
        setPages(result)
    }, [pagesCount])

    useEffect(() => {
        calculateCountOfPages()
        setPortionNumber(1)
    }, [calculateCountOfPages])

    const portionCount = Math.ceil(pagesCount / chunk)
    let leftPortionPageNumber = (portionNumber - 1) * chunk + 1
    let rightPortionPageNumber = portionNumber * chunk

    if (isFetching) {
        return null
    }
    return (
        <div className={styles.pages}>
            {portionNumber > 1 && (
                <button className={styles.btn} onClick={() => setPortionNumber(portionNumber - 1)}>
                    &#60;
                </button>
            )}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span
                            key={p}
                            className={cn({ [styles.currentPage]: currentPage === p }, styles.page)}
                            onClick={() => dispatch(setCurrentPage(p))}
                        >
                            {p}
                        </span>
                    )
                })}
            {portionCount > portionNumber && (
                <button className={styles.btn} onClick={() => setPortionNumber(portionNumber + 1)}>
                    &#62;
                </button>
            )}
        </div>
    )
}

export default Pagination
