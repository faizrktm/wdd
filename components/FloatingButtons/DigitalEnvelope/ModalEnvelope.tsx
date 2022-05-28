import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Bank {
  bankName: string;
  accountNumber: number;
  accountName: string;
}

const banks: Bank[] = [
  {
    bankName: 'BCA',
    accountNumber: 5425156109,
    accountName: 'Faiz Azmi Rekatama'
  },
  {
    bankName: 'BRI',
    accountNumber: 321321321321,
    accountName: 'Eindita Septiara'
  },
]

function Bank({ bankName, accountName, accountNumber }: Bank) {
  const [copied, setCopied] = useState<boolean>(false);
  const copyRef = useRef(null);

  useEffect(() => {
    return () => {
      if(copyRef.current) {
        clearTimeout(copyRef.current);
      }
    }
  }, []);

  const copy = (accountNumber: number) => {
    if(copied) return;

    navigator.clipboard.writeText(`${accountNumber}`);

    setCopied(true);

    copyRef.current = setTimeout(() => {
      setCopied(false);
    }, 5000);
  }

  return (
    <div className="ml-4 py-2 border-t-2 grid grid-rows-3 gap-1.5">
      <p className="text-blackish">{bankName}</p>
      <div className="flex items-center">
        <p className="font-bold mr-2">{accountNumber}</p>
        <button type="button" onClick={() => copy(accountNumber)}>
          <Image src={`${copied ? '/images/correct.png' : '/images/copy.svg'}`} width={20} height={20}/>
        </button>
      </div>
      <p className="text-blackish">{accountName}</p>
    </div>
  )
}

export default function ModalEnvelope() {
  return (
    <div className="p-4">
      <p className="text-blackish text-sm md:text-md">Tanpa mengurangi rasa hormat, bagi keluarga, sahabat, dan rekan yang ingin memberikan tanda kasih untuk kami, dapat melalui:</p>
      <div className="mt-4">
        {banks.map((item) => {
          return (
            <Bank {...item} key={item.accountNumber} />
          )
        })}
      </div>
    </div>
  )
}
