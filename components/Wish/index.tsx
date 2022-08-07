import { useCallback, useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';

import Section from "@/components/Section"

import styles from '@/components/Intro/Intro.module.css';
import Button from "@/components/Button";

import FormWish from './Form';

dayjs.extend(relativeTime);
dayjs.locale('id');

interface WishProps {
  guest: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Wish({ guest }: WishProps) {
  const { data, error, mutate } = useSWR('/api/wish/list', fetcher);
  const [showAll, setShowAll] = useState(false);

  const w = data?.wishes || [];
  const wishes = showAll ? w : w.slice(0, 10);

  const onSuccess = useCallback(() => {
    mutate();
  }, [mutate])

  return (
    <Section className="bg-primary place-items-center">
      <div className="w-full max-w-2xl">
        <div className="flex justify-center items-center md:mb-4">
          <Image src="/images/swan.png" className={styles.swanRotate} alt="swan" width={40} height={40} />
        </div>
        <h1 className="text-2xl md:text-base tracking-widest text-white mb-3 font-cormorant font-bold text-center">KIRIM UCAPAN</h1>

        <FormWish guest={guest} onSuccess={onSuccess} />

        <div className="mt-16 w-full">
          {wishes.map(({ name, wish, id, created_at }) => {
            const date = dayjs(created_at).fromNow();

            return (
              <div className="flex flex-col bg-blackish px-4 py-2 w-full rounded mb-4" key={id}>
                <span className="flex items-center place-content-between">
                  <p className="text-white text-lg">{name}</p>
                  <p className="text-white text-xs">{date}</p>
                </span>
                <p className="text-white">{wish}</p>
              </div>
            )
          })}

          {wishes.length >= 10 && !showAll && <Button text="Tampilkan semua" className="mt-4 w-full" onClick={() => setShowAll(true)} />}
          {showAll && <Button text="Tampilkan lebih sedikit" className="mt-4 w-full" onClick={() => setShowAll(false)} />}
        </div>

        {Boolean(error) && (
          <div className="flex flex-col bg-red-700 px-4 py-2 w-full rounded mb-4">
            <p className="text-lg text-center text-white">Oops maaf ya sedang ada gangguan!</p>
          </div>
        )}
      </div>
    </Section>
  )
}
