import Section from "@/components/Section"
import { TextCenter } from "@/components/TextCenter"
import Image from 'next/image';

const PROTOCOL_HEALTH = [
  {
    label: 'Tidak Berkerumun',
    image: '/images/h-protocol/crowd.png',
  },
  {
    label: 'Menjaga Jarak Aman',
    image: '/images/h-protocol/distance.png',
  },
  {
    label: 'Tidak Berjabat Tangan',
    image: '/images/h-protocol/handshake.png',
  },
  {
    label: 'Memakai masker',
    image: '/images/h-protocol/mask.png',
  },
  {
    label: 'Gunakan Sanitizer',
    image: '/images/h-protocol/sanitize.png',
  },
  {
    label: 'Mencuci Tangan',
    image: '/images/h-protocol/wash.png',
  }
]

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
      <div className="grid gap-4 grid-cols-3 grid-rows-2 mt-8">
        {PROTOCOL_HEALTH.map(({ label, image }) => {
          return (
            <div className="flex flex-col items-center text-center">
              <Image src={image} width={80} height={80} />
              <TextCenter className="text-blackish text-sm leading-6 mt-2">{label}</TextCenter>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
