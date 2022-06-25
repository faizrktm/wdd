import Section from "@/components/Section"
import Image from 'next/image';

import styles from '@/components/Intro/Intro.module.css';
import Button from "@/components/Button";

export default function Wish(){
  return (
    <Section className="bg-primary place-items-center">
      <div className="flex justify-center items-center md:mb-4">
        <Image src="/images/swan.png" className={styles.swanRotate} alt="swan" width={40} height={40} />
      </div>
      <h1 className="text-2xl md:text-base tracking-widest text-white mb-3 font-cormorant font-bold">KIRIM UCAPAN</h1>
      <label className="block flex flex-col w-full mb-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
          Nama
        </span>
        <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
      </label>
      <label className="block flex flex-col w-full">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
          Ucapan
        </span>
        <textarea name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Selamat yaa!" />
      </label>
      <Button text="Kirim" className="mt-8 w-full" onClick={() => {}} />

      <div className="mt-16 w-full">
        <div className="flex flex-col bg-blackish px-4 py-2 w-full rounded mb-4">
          <p className="text-white text-lg">Faiz</p>
          <p className="text-white">Selamat ya faiz dan rara! Semoga sakinah mawaddah warahmah!</p>
        </div>

        <Button text="Tampilkan semua" className="mt-4 w-full" onClick={() => {}} />
      </div>
    </Section>
  )
}
