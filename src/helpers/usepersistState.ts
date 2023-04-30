import { useState, useEffect, useCallback } from 'react';

function usePersistState(key: string, defaultKey: boolean) {
  const [value, setValue] = useState(defaultKey);

  const updateValue = useCallback(
    (val: boolean) => {
      setValue(val);
      window?.sessionStorage.setItem(key, JSON.stringify(val));
    },
    [key],
  );

  useEffect(() => {
    const data = window?.sessionStorage.getItem(key);
    if (data !== null) updateValue(JSON.parse(data));
  }, [key, updateValue]);

  return [value, updateValue] as const;
}

export default usePersistState;