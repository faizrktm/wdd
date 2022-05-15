import Section from "@/components/Section"
import { TextCenter } from "@/components/TextCenter"
import Image from 'next/image';

import styles from '@/components/Intro/Intro.module.css';

export default function HealthProtocol(){
  return (
    <Section className="bg-white place-items-center">
      <div className="flex justify-center items-center md:mb-4">
        <Image src="/images/swan.png" alt="swan" width={40} height={40} />
      </div>
      <h1 className="text-2xl md:text-base tracking-widest text-primary mb-3 font-cormorant font-bold">PROTOKOL KESEHATAN</h1>
      <TextCenter className="text-blackish text-sm leading-6">
        Tanpa mengurangi rasa hormat, acara pernikahan menerapkan protokol kesehatan sesuai anjuran pemerintah sebagai berikut
      </TextCenter>
    </Section>
  )
}
