import useSafeContext from '@/hooks/useSafeContext';
import {createContext, PropsWithChildren} from 'react';

export const GuestContext = createContext<{ guest: string, rsvp: number, rsvpString: string }| undefined | symbol>(undefined);

const rsvpDict = [
  'not yet make reservation',
  'yes',
  'no',
  'hesitate'
];

export const GuestProvider = ({ guest, rsvp, children }: PropsWithChildren<{guest: string, rsvp: number}>) => {

  const rsvpString = rsvpDict[rsvp];

  return <GuestContext.Provider value={{ guest, rsvp, rsvpString  }}>{children}</GuestContext.Provider>
}

export const useGuest = () => {
  return useSafeContext(GuestContext);
}
