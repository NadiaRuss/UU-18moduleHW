import { Link } from "react-router-dom"
import styles from "./styles.module.css"


const ModalOpen = () => {
    return(
        <div className={styles.modal}>
            <nav className={styles.navigation}>
                <Link to="/beans">Beans</Link>
                <Link to="/facts">Facts</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/combinations">Combinations</Link>
                <Link to="/history">History</Link>
            </nav>
        </div>


    )
}
export default ModalOpen