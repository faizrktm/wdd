import type { NextPage } from 'next';
import {useState} from 'react';

import Intro from '@/components/Intro';
import Couple from '@/components/Couple';
import SaveDate from '@/components/SaveDate';
import Location from '@/components/Location';
import ThankYou from '@/components/ThankYou';

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  if(!open){
    return (
      <Intro onChange={setOpen} />
    )
  }

  return (
    <>
      <Couple />
      <SaveDate />
      <Location />
      <ThankYou />
    </>
  );
}

export default Home;
