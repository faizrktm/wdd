import type { NextPage } from 'next';
import {useState} from 'react';

import Intro from '@/components/Intro';
import Hero from '@/components/Hero';
import Couple from '@/components/Couple';
import SaveDate from '@/components/SaveDate';
import Location from '@/components/Location';
import ThankYou from '@/components/ThankYou';
import HealthProtocol from '@/components/HealthProtocol';
import Wish from '@/components/Wish';
import FloatingButtons from '@/components/FloatingButtons';
import Meta from '@/components/Meta';
import { GuestProvider } from '@/contexts/Guest';
import supabase from '@/helper/supabase';

const Home: NextPage<{ guest?: string, rsvp: number }> = ({ guest, rsvp }) => {
  const [open, setOpen] = useState(false);

  if(!open) {
    return (
      <>
        <Meta guest={guest} />
        <Intro onChange={setOpen} />
      </>
    )
  }

  return (
    <GuestProvider guest={guest || ''} rsvp={rsvp}>
      <Meta guest={guest} />
      <Hero />
      <Couple />
      <SaveDate />
      <Location />
      <ThankYou />
      <HealthProtocol />
      <Wish guest={guest} />
      <FloatingButtons />
    </GuestProvider>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const guest = context?.query?.['lovely_guest'];

  let rsvp = 0;

  if (guest) {
    try {
      const r = await supabase.checkRsvp(guest);
      const data = r?.[0];
      if(data && data.name === guest){
        rsvp = data.present;
      }
    } catch (error) {
      console.error(error.message);
    }
  }


  return {
    props: {
      guest: guest || '',
      rsvp: rsvp || false,
    },
  }
}
