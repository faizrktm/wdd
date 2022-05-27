import Image from 'next/image';
import Section from "@/components/Section"
import Images from "@/components/Gallery/Images";

import styles from '@/components/Intro/Intro.module.css';
import ModalProvider from '@/components/Modal/Context';

export default function Gallery(){
  return (
    <ModalProvider>
      <Section className="bg-white place-items-center !px-0 !pb-0">
        <div className="flex justify-center items-center md:mb-4">
          <Image src="/images/swan.png" className={styles.swanRotate} alt="swan" width={40} height={40} />
        </div>
        <h1 className="text-2xl md:text-base tracking-widest text-primary mb-3 font-cormorant font-bold">MOMEN BERHARGA</h1>
        <Images />
      </Section>
    </ModalProvider>
  )
}
