import { useCallback } from 'react';

const useLocalStorage = () => {
  const setItem = (key, item) => {
    const stringified = JSON.stringify(item);

    localStorage.setItem(key, stringified);
  };

  const getItem = key => {
    const item = localStorage.getItem(key);
    const parsed = JSON.parse(item);

    return parsed;
  };

  const { clear } = localStorage;
  const { removeItem } = localStorage;

  return {
    clear,
    getItem: useCallback(getItem, []),
    removeItem,
    setItem: useCallback(setItem, []),
  };
};

export default useLocalStorage;
