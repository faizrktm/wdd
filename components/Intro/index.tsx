import Image from 'next/image';
import Button from '@/components/Button';

import styles from './Intro.module.css';

interface IntroProps {
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Intro({ onChange }: IntroProps){
  return (
    <div className="flex flex-col bg-primary h-screen w-screen place-items-center bg-[url('/images/bg2.jpg')] lg:bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-white text-center w-5/6 rounded-lg p-8 md:p-16 bg-opacity-80 m-auto">
        <div className="flex justify-center items-center md:mb-4">
          <Image src="/images/swan.png" className={styles.swanRotate} alt="swan" width={64} height={64} />
          <Image src="/images/swan.png" alt="swan" width={64} height={64} />
        </div>
        <h6 className="text-sm md:text-base tracking-widest text-wind mb-2">THE WEDDING OF</h6>
        <h1 className="main-text text-4xl md:text-7xl lg:text-8xl text-primary mb-2.5">Faiz &amp; Rara</h1>
        <p className="text-xs md:text-base text-wind mb-3">Saturday, 20th August 2022</p>
        <Button text="Open Invitation" onClick={() => onChange(true)} type="primary" />
      </div>
    </div>
  )
}