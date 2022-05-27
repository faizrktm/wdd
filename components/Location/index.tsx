import Section from "@/components/Section"
import Link from "@/components/Link"
import Image from "next/image"

export default function Location(){
  return (
    <Section className="bg-white">
      <div className="bg-primary text-center w-5/6 rounded-lg p-8 bg-opacity-80 m-auto">
        <Image src="/images/wheat.png" alt="wheat" width={80} height={21} />
        <p className="text-2xl md:text-base tracking-widest text-white mb-3 font-cormorant font-bold">LOKASI</p>
        <h1 className="text-xl text-white mb-1 font-poppins">Gedung Ernawan Khua Jukhai</h1>
        <p className="text-sm md:text-base text-white mb-1">Jl. KH. Ahmad Dahlan No.15, Pahoman, Kec. Tlk. Betung Utara, Kota Bandar Lampung</p>
        <Link target="_blank" location="https://goo.gl/maps/fULf5scf6HcDCd2a7" text="Buka Peta" className="mt-4" icon={<div className="mr-2"><Image src="/images/google-maps.webp" alt="icon map" width={20} height={20} /></div>} />
      </div>
    </Section>
  )
}
