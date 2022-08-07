import useSafeContext from '@/hooks/useSafeContext';
import {createContext, PropsWithChildren} from 'react';

export const GuestContext = createContext<{ guest: string, rsvp: boolean }| undefined | symbol>(undefined);

export const GuestProvider = ({ guest, rsvp, children }: PropsWithChildren<{guest: string, rsvp: boolean}>) => {
  return <GuestContext.Provider value={{ guest, rsvp }}>{children}</GuestContext.Provider>
}

export const useGuest = () => {
  return useSafeContext(GuestContext);
}
