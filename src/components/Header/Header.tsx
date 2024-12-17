import Nav from '../Nav/Nav';
import styles from './header.module.css';
import logo_img from '../../assets/wiki-bean.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header_container}>
            <Link to="/" className={styles.logo}>
                <img src={logo_img} className={styles.logo_img} alt="logo" />
                <p className={styles.logo_name}>Jelly Belly</p>
            </Link>
        < Nav />
        </div>
    );
};

export default Header