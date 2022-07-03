import Section from "@/components/Section"
import Image from "next/image"

export default function SaveDate(){
  return (
    <Section className="bg-primary place-items-center lg:flex-row">
      <div className="bg-white text-center w-5/6 rounded-lg p-8 bg-opacity-80 m-auto">
        {/* <Image src="/images/wheat.png" alt="wheat" width={80} height={21} /> */}
        <p className="text-2xl md:text-base tracking-widest text-primary mb-3 font-cormorant font-bold">AKAD NIKAH</p>
        <h1 className="text-xl text-blackish mb-1 font-poppins">Hari &amp; Tanggal</h1>
        <p className="text-sm md:text-base text-blackish mb-1">Sabtu, 20 Agustus 2022</p>
        <p className="text-sm md:text-base text-blackish">Pukul 08.00 WIB</p>
      </div>
      <div className="my-4 lg:mx-4 lg:my-0" />
      <div className="bg-white text-center w-5/6 rounded-lg p-8 bg-opacity-80 m-auto">
        {/* <Image src="/images/wheat.png" alt="wheat" width={80} height={21} /> */}
        <p className="text-2xl md:text-base tracking-widest text-primary mb-3 font-cormorant font-bold">RESEPSI</p>
        <h1 className="text-xl text-blackish mb-1 font-poppins">Hari &amp; Tanggal</h1>
        <p className="text-sm md:text-base text-blackish mb-1">Sabtu, 20 Agustus 2022</p>
        <p className="text-sm md:text-base text-blackish">Pukul 10.00 WIB</p>
      </div>
      <div className="absolute top-0 right-0">
        <Image src="/images/dry-flower-3.png" width={150} height={150} />
      </div>
      {/* <div className="absolute bottom-[-10px] right-0">
        <Image src="/images/dry-flower-1.png" width={500} height={500} />
      </div> */}
      <div className="absolute bottom-[-10px] left-0">
        <Image src="/images/dry-flower-2.png" width={150} height={150} />
      </div>
    </Section>
  )
}
