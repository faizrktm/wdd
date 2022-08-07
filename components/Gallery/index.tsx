import Image from 'next/image';
import Section from "@/components/Section"
import Images from "@/components/Gallery/Images";

import ModalProvider from '@/components/Modal/Context';

export default function Gallery(){
  return (
    <ModalProvider>
      <Section className="bg-white place-items-center !px-0 !pb-0 pt-0 lg:pt-8">
        <Images />
      </Section>
    </ModalProvider>
  )
}
