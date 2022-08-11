import type { NextPage } from 'next';
import {useState} from 'react';
import dynamic from 'next/dynamic'

import supabase from '@/helper/supabase';

import Intro from '@/components/Intro';
import Meta from '@/components/Meta';
import { GuestProvider } from '@/contexts/Guest';
import Loading from '@/components/Steps/Loading';

const Second = dynamic(() => import('@/components/Steps/Second'), {
  loading: Loading,
  ssr: false,
});


const Home: NextPage<{ guest?: string, rsvp: number }> = ({ guest, rsvp }) => {
  const [open, setOpen] = useState(false);

  if(!open) {
    return (
      <GuestProvider guest={guest || ''} rsvp={rsvp}>
        <Meta guest={guest} />
        <Intro onChange={setOpen} />
      </GuestProvider>
    )
  }

  return (
    <GuestProvider guest={guest || ''} rsvp={rsvp}>
      <Second />
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
      rsvp,
    },
  }
}
