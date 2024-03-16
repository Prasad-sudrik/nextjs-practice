import Image from "next/image";
import styles from "./about.module.css";

export const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/13986143/pexels-photo-13986143.jpeg"
          alt=""
          fill
        />
      </div>
    </div>
  );
};
export default AboutPage;

