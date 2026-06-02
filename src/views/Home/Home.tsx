import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import heroImage from '../../assets/images/blueflannelinwoods.jpg';

const Home = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight}>dallin jackson</span>.
        </h1>

        <h2 className={styles.subtitle}>
          Software Engineer & Problem Solver
        </h2>

        <p className={styles.description}>
          I work for clean, useful code that brings the edge of technology to application.
          Welcome to my portfolio and personal sandbox.
        </p>

        <div className={styles.buttonGroup}>
          <Link to="/projects" className={styles.primaryButton}>
            View My Work
          </Link>
          <Link to="/about" className={styles.secondaryButton}>
            More About Me
          </Link>
          <a
            href="https://blog.djackson.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subtleLink}
          >
            View my blog &rarr;
          </a>

        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Link to="/about" className={styles.angledFrame}>
          <img src={heroImage} alt="Dallin Jackson" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
