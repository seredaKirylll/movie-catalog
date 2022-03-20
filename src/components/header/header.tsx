import { Search } from '../common'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContener}>
            <div className={styles.nameWeb}>Movies Catalog</div>
            <Search />
        </header>
    )
}

export default Header
