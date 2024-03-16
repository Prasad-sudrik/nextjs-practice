import styles from './home.module.css';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency.</h1>
      <p>
        Lorem ipsum dolor sit amet, qui
        minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </p>
      <div className={styles.button}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="brands.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="hero.png" alt="" fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;
