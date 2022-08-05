import Section from "@/components/Section"
import { TextCenter } from "@/components/TextCenter"
import Image from 'next/image';

const PROTOCOL_HEALTH = [
  {
    label: 'Tidak Berkerumun',
    image: '/images/h-protocol/brown/crowd.png',
  },
  {
    label: 'Menjaga Jarak Aman',
    image: '/images/h-protocol/brown/distance.png',
  },
  {
    label: 'Tidak Berjabat Tangan',
    image: '/images/h-protocol/brown/handshake.png',
  },
  {
    label: 'Memakai masker',
    image: '/images/h-protocol/brown/mask.png',
  },
  {
    label: 'Gunakan Sanitizer',
    image: '/images/h-protocol/brown/sanitize.png',
  },
  {
    label: 'Mencuci Tangan',
    image: '/images/h-protocol/brown/wash.png',
  }
]

export default function HealthProtocol(){
  return (
    <Section className="bg-white place-items-center">
      <div className="flex justify-center items-center md:mb-4">
        <Image src="/images/swan.png" alt="swan" width={40} height={40} />
      </div>
      <h1 className="text-2xl md:text-base tracking-widest text-primary mb-3 font-cormorant font-bold">PROTOKOL KESEHATAN</h1>
      <TextCenter className="text-blackish text-sm leading-6 max-w-2xl">
        Tanpa mengurangi rasa hormat, acara pernikahan menerapkan protokol kesehatan sesuai anjuran pemerintah sebagai berikut
      </TextCenter>
      <div className="grid gap-4 grid-cols-3 grid-rows-2 mt-8">
        {PROTOCOL_HEALTH.map(({ label, image }) => {
          return (
            <div className="flex flex-col items-center text-center" key={image}>
              <div className="flex items-center justify-center relative w-[70px] h-[70px] bg-primary rounded-full">
                <Image src={image} width={70} height={70} />
              </div>
              <TextCenter className="text-blackish text-sm leading-6 mt-2">{label}</TextCenter>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
