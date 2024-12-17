import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const DesktopNav = () => {
    return (
        <nav className={styles.navigation}>
                <Link to="/beans">Beans</Link>
                <Link to="/facts">Facts</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/combinations">Combinations</Link>
                <Link to="/history">History</Link>
        </nav>
    )
}

export default DesktopNav;