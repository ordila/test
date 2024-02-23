import { FC } from "react";

import styles from "./Home.module.scss";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to My App!</h1>

      <p className={styles.description}>
        Explore our amazing content and discover new things.
      </p>
    </div>
  );
};
