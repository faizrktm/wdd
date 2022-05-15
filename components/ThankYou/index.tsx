import Image from 'next/image';

import Section from "@/components/Section"
import { TextCenter } from "@/components/TextCenter"
import Divider from "@/components/Divider"

import styles from '@/components/Intro/Intro.module.css';

export default function ThankYou() {
  return (
    <Section className="bg-primary place-items-center !pb-0 !lg:px-0 !px-0">
      <div className="flex justify-center items-center md:mb-4">
        <Image src="/images/swan.png" className={styles.swanRotate} alt="swan" width={40} height={40} />
      </div>
      <h1 className="text-2xl md:text-base tracking-widest text-white mb-3 font-cormorant font-bold">WITH LOVE</h1>
      <TextCenter className="text-white text-sm leading-6 mb-16 px-4 lg:px-12">
        Merupakan suatu kehormatan &amp; kebahagiaan serta kesan yang mendalam bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada kami.
      </TextCenter>
      <Divider className="mt-auto" />
    </Section>
  )
}
