import { ITweet } from "@/pages/Tweets/Tweets.types";
import { Dispatch, SetStateAction } from "react";

export type TId = number;

export interface ITweetCard extends ITweet {
  setFollowing: Dispatch<SetStateAction<number[]>>;
  following: TId[];
}
