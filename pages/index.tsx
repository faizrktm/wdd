import type { NextPage } from 'next';
import {useState} from 'react';

import Intro from '@/components/Intro';
import Couple from '@/components/Couple';
import SaveDate from '@/components/SaveDate';

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
    </>
  );
}

export default Home;
