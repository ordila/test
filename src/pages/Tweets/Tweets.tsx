import { FC, useEffect, useState } from "react";
import Select from "react-select";

import { Loader, TweetsCard } from "@/components";

import styles from "./Tweets.module.scss";

import { instance, localStorageService } from "@/helpers";

import { LOCAL_STORAGE_KEYS } from "@/constants";

import { TId } from "@/components/TweetsCard/TweetsCard.types";
import { ISelectItem, ITweet } from "./Tweets.types";

const options: ISelectItem[] = [
  { value: "all", label: "Show all" },
  { value: "follow", label: "Show follow" },
  { value: "following", label: "Show following" },
];

export const Tweets: FC = () => {
  const [tweets, setTweets] = useState<ITweet[] | null>(null);

  const [filteredTweets, setFilteredTweets] = useState<ITweet[] | null>(null);

  const [following, setFollowing] = useState<number[]>([]);

  const [visible, setVisible] = useState(3);

  const [defaultSelectValue, setDefaultSelectValue] = useState<ISelectItem>(
    options[0]
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const selectChecked = (value: any) => {
    setDefaultSelectValue(value);
  };

  useEffect(() => {
    const { getItem } = localStorageService<TId[]>(LOCAL_STORAGE_KEYS.USER_ID);

    const getAllTweets = async () => {
      try {
        const { data } = await instance.get("/tweets");
        setTweets(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getAllTweets();

    setFollowing(getItem());
  }, []);

  useEffect(() => {
    if (!tweets) return;

    switch (defaultSelectValue.value) {
      case "all": {
        setFilteredTweets(tweets);
        break;
      }

      case "following": {
        const followingFiltered =
          tweets.filter((el) => following?.includes(el.id)) || [];

        setFilteredTweets(followingFiltered);

        break;
      }

      case "follow": {
        const notFollowingFiltered =
          tweets.filter((el) => !following?.includes(el.id)) || [];

        setFilteredTweets(notFollowingFiltered);

        break;
      }

      default:
        setFilteredTweets([]);
    }
  }, [defaultSelectValue, following, tweets]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Select
        options={options}
        onChange={selectChecked}
        defaultValue={defaultSelectValue}
      />

      <ul className={styles.list_wrapper}>
        {filteredTweets?.slice(0, visible).map((tweet) => (
          <TweetsCard
            key={tweet.id}
            {...tweet}
            setFollowing={setFollowing}
            following={following}
          />
        ))}
      </ul>

      {visible < (filteredTweets?.length || 0) && (
        <button className={styles.btn_load_more} onClick={showMoreItem}>
          Load more
        </button>
      )}
    </div>
  );
};
