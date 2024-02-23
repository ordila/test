import { FC, useEffect, useState } from "react";

import classNames from "classnames";

import styles from "./TweetsCard.module.scss";

import { localStorageService, numberWithCommas } from "@/helpers";

import { LOCAL_STORAGE_KEYS } from "@/constants";

import { ITweetCard, TId } from "./TweetsCard.types";

export const TweetsCard: FC<ITweetCard> = ({
  id,
  followers,
  tweets,
  avatar,
  setFollowing,
  following,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const { setItem, removeItem } = localStorageService<TId[]>(
    LOCAL_STORAGE_KEYS.USER_ID
  );

  useEffect(() => {
    setIsFollowing(following.find((el) => el === id) !== undefined);
  }, [id, following]);

  const onButtonClick = () => {
    if (!following.includes(id as TId)) {
      setItem(id);

      setFollowing((prevValue: TId[]) => [...prevValue, id]);

      setIsFollowing(true);
    } else {
      removeItem(id);

      setFollowing((prevValue: TId[]) => prevValue.filter((el) => el !== id));

      setIsFollowing(false);
    }
  };

  const formattedFollowers = numberWithCommas(
    !isFollowing ? followers : followers + 1
  );

  const classButton = classNames(styles.button, {
    [styles["is-following"]]: isFollowing,
  });

  return (
    <li className={styles.card_wrapper}>
      <div className={styles.divider}></div>
      <div className={styles.avatar_wrapper}>
        <img src={avatar} alt="avatar" width={50} />
      </div>
      <div className={styles.titles_wrapper}>
        <p className={styles.tweets_title}>{tweets} TWEETS</p>
        <p className={styles.followers_title}>{formattedFollowers} FOLLOWERS</p>
      </div>
      <button onClick={onButtonClick} className={classButton}>
        {!isFollowing ? "FOLLOW" : "FOLLOWING"}
      </button>
    </li>
  );
};
