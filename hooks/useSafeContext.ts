import {useContext, Context} from 'react';

export default function useSafeContext<T>(context: Context<T | symbol | undefined>): T {
  const contextValue = useContext(context);

  if (typeof contextValue === 'undefined') {
    throw new Error(`Please use this context within its provider!`);
  }

  if (typeof contextValue === 'symbol') {
    throw new Error(`Please use this context within provider '${contextValue.description}'!`);
  }

  return contextValue;
}
