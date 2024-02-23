import { LOCAL_STORAGE_KEYS } from "@/constants";

export const localStorageService = <TData extends number[]>(
  key: LOCAL_STORAGE_KEYS
) => {
  const getItem = (): TData => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [];
  };

  const removeItem = (valueToRemove: TData[number]) => {
    const existingData = getItem();

    const updatedData = existingData.filter((item) => item !== valueToRemove);

    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  const setItem = (newData?: TData[number]) => {
    const existingData = getItem();

    if (newData && !existingData.includes(newData)) {
      const updatedData = [...existingData, newData];

      localStorage.setItem(key, JSON.stringify(updatedData));
    }
  };

  return { setItem, getItem, removeItem };
};
