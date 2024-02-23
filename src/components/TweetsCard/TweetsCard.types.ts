import { ITweet } from "@/pages/Tweets/Tweets.types";

export type TId = number;

export interface ITweetCard extends ITweet {
  setFollowing: (val) => void;
  following: TId[];
}
