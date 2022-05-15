import Section from "@/components/Section"
import { TextCenter } from "@/components/TextCenter"
import Image from 'next/image';

import styles from '@/components/Intro/Intro.module.css';

export default function Wish(){
  return (
    <Section className="bg-white place-items-center">
      <div className="flex justify-center items-center md:mb-4">
        <Image src="/images/swan.png" className={styles.swanRotate} alt="swan" width={40} height={40} />
      </div>
      <h1 className="text-2xl md:text-base tracking-widest text-primary mb-3 font-cormorant font-bold">KIRIM UCAPAN</h1>
    </Section>
  )
}
