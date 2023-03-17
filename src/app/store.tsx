import { createContext, useMemo } from 'react';

import { REQUEST_OPTIONS, URL } from './api';
import { useAsyncEffect } from './hooks/useAsyncEffect';

const Context = createContext(null);

function ContextProvider({ children }: { children: React.ReactElement }) {
  const {
    result: courses,
    error,
    isLoading,
  } = useAsyncEffect(
    () =>
      fetch(URL(), REQUEST_OPTIONS)
        .then(res => res.json())
        .then(data => data.courses),
    () => Promise.resolve(),
    [],
  );

  console.log('result', courses);
  console.log('error', error);
  console.log('isLoading', isLoading);

  const contextValue = useMemo(
    () => ({
      courses,
      error,
      isLoading,
    }),
    [courses, error, isLoading],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
