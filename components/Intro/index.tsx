import Image from 'next/image';
import Button from '@/components/Button';

import styles from './Intro.module.css';
import { useGuest } from '@/contexts/Guest';

interface IntroProps {
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Intro({ onChange }: IntroProps){
  const { guest } = useGuest();

  return (
    <div className="flex flex-col bg-primary h-screen w-screen place-items-center bg-[url('/images/bg-intro.jpg')] lg:bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-white text-center w-5/6 rounded-lg p-8 md:p-16 bg-opacity-80 m-auto">
        <div className="flex justify-center items-center md:mb-4">
          <Image src="/images/swan.png" className={styles.swanRotate} alt="swan" width={64} height={64} />
          <Image src="/images/swan.png" alt="swan" width={64} height={64} />
        </div>
        <h6 className="text-sm md:text-base tracking-widest text-wind mb-2">PERNIKAHAN</h6>
        <div className="flex items-center justify-center pt-2.5 pb-2.5">
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-primary font-lejour">Rara</h1>
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-primary font-cursive px-1">&amp;</h1>
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-primary font-lejour">Faiz</h1>
        </div>
        {guest ? (
          <div>
            <p className="text-xs md:text-base text-wind my-2">Kepada Yth.</p>
            <p className="text-xl text-blackish mb-6">{guest}</p>
          </div>
        ) : <p className="text-xs md:text-base text-wind mb-3">Sabtu, 20 Agustus 2022</p>}
        <Button text="Buka Undangan" onClick={() => onChange(true)} type="primary" />
      </div>
    </div>
  )
}
