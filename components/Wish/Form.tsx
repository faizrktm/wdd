import { useState, ChangeEvent, ChangeEventHandler } from 'react';
import Button from "@/components/Button";

const defaultValue = {
  name: '',
  wish: ''
};

export default function FormWish({ guest }: { guest: string }) {
  const [payload, setPayload] = useState(defaultValue);
  const {name, wish} = payload;
  const [error, setError] = useState('');

  const updateValue = (type: 'name' | 'wish') => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e?.currentTarget?.value ?? null;

    if(value === null) return;

    setPayload(prev => ({
      ...prev,
      [type]: value,
    }))
  }

  const sendWish = () => {
    setError('');

    const n = guest || name;

    if(n === '' || wish === ''){
      setError('Nama dan Ucapan harus diisi');
      return;
    }

    fetch('/api/sendWish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          name: guest || name,
          wish,
        }
      )
    })
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          setPayload(defaultValue);
        } else {
          setError('Ooops maaf ada gangguan!');
        }
      })
      .catch(error => {
        setError(error.message);
      })
  }

  return (
    <>
      { error
        ?
          <div className="flex flex-col bg-red-700 px-4 py-2 w-full rounded mb-4">
            <p className="text-lg text-center text-white">{error}</p>
          </div>
        : null
      }
      {
          !guest ?
            <label className="block flex flex-col w-full mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Nama
              </span>
              <input value={name} type="text" onChange={updateValue('name')} name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </label>
          : null
        }

        <label className="block flex flex-col w-full">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Ucapan
          </span>
          <textarea value={wish} name="wish" onChange={updateValue('wish')} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Selamat yaa!" />
        </label>
        <Button text="Kirim" className="mt-8 w-full" onClick={sendWish} />
    </>
  )
}
