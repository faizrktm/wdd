import type { NextPage } from 'next';
import {useState} from 'react';

import Intro from '@/components/Intro';
import Hero from '@/components/Hero';
import Couple from '@/components/Couple';
import SaveDate from '@/components/SaveDate';
import Location from '@/components/Location';
import ThankYou from '@/components/ThankYou';
import Gallery from '@/components/Gallery';
import HealthProtocol from '@/components/HealthProtocol';
import Wish from '@/components/Wish';
import FloatingButtons from '@/components/FloatingButtons';

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  if(!open){
    return (
      <Intro onChange={setOpen} />
    )
  }

  return (
    <>
      <Hero />
      <Couple />
      <SaveDate />
      <Location />
      <ThankYou />
      <Gallery />
      <HealthProtocol />
      <Wish />
      <FloatingButtons />
    </>
  );
}

export default Home;
