import type { NextPage } from 'next';
import {useState} from 'react';

import Intro from '../components/Intro';

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  if(!open){
    return (
      <Intro onChange={setOpen} />
    )
  }

  return null;
}

export default Home;