import axios from "axios";
import { BASE_URL } from "@/constants";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const updateTweet = async ({ id }: { id: number }) => {
  try {
    const { data } = await instance.put("/tweets", { id });
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};
