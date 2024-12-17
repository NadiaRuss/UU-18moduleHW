import styles from './styles.module.css';
import bean from '../../assets/big-animated-bean.gif';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
        <Header />
        <div className={styles.home_container}>
            <img src={bean} alt="big bean" className={styles.img} />
            <div className={styles.description}>
                <h1 className={styles.h1}>Welcome to the World of Jelly Belly:</h1>
                <p className={styles.paragraph}>A Rainbow of Flavors Awaits!</p>
            </div>
        </div>
        <Footer />
        </>
    )

}

export default Home