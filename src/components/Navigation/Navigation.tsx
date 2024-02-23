import { FC } from "react";

import styles from "./Navigation.module.scss";

import { NavLink } from "react-router-dom";

import { ROUTES } from "@/constants";
const { HOME, TWEETS } = ROUTES;

export const Navigation: FC = () => {
  return (
    <div className={styles.navigation_wrapper}>
      <NavLink className={styles.link} to={HOME}>
        Home
      </NavLink>
      <NavLink className={styles.link} to={TWEETS}>
        Tweets
      </NavLink>
    </div>
  );
};
