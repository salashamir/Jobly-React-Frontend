import { useState, useEffect } from "react";

/** Custom hook keeps state data synced with localstorage
 *
 * This creates 'item' as state and looks in localStorage for curr value
 *
 * (default 'firstValue' if not found)
 *
 * On item change, effect reruns:
 * - if new state null, removes from localstorage
 * - else, updates localstorage
 */

const useLocalStorage = (key, firstValue = null) => {
  const initVal = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState(initVal);

  useEffect(() => {
    console.debug("hooks useLocalStorage useEffect", "item=", item);

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
};

export default useLocalStorage;
