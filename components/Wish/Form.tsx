import { useState, ChangeEvent, memo } from 'react';
import Button from "@/components/Button";
import Alert from "@/components/Alert";
import useMutation from '@/hooks/useMutation';

interface FormWishProps {
  guest?: string;
  onSuccess: () => void;
}

function FormWish({ guest, onSuccess }: FormWishProps) {
  const isGuestPrefilled = Boolean(guest);
  const [disabled, setDisabled] = useState(isGuestPrefilled);

  const defaultValue = {
    name: guest,
    wish: ''
  }
  const [payload, setPayload] = useState(defaultValue);
  const {name, wish} = payload;

  const { mutate, loading, error } = useMutation({
    url: '/api/wish/post',
    validator: (payload) => {
      if (!payload.name){
        return 'Nama harus diisi';
      }

      if (!payload.wish){
        return 'Harapan harus diisi';
      }

      return;
    }
  });

  const updateValue = (type: 'name' | 'wish') => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e?.currentTarget?.value ?? null;

    if(value === null) return;

    setPayload(prev => ({
      ...prev,
      [type]: value,
    }))
  }

  const sendWish = async () => {
    try {
      const response = await mutate({
        name: guest || name,
        wish,
      });

      if(response?.success) {
        setPayload(defaultValue);
        onSuccess();
      } else {
        throw new Error('Oops ada sesuatu yang salah!')
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      { Boolean(error)
        ?
          <Alert message={error} />
        : null
      }
        <label className="block flex flex-col w-full mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Nama
          </span>
          <input value={name} type="text" disabled={disabled} onChange={updateValue('name')} name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 disabled:bg-rose disabled:border-rose" />
          {disabled && <button onClick={() => setDisabled(false)} className="text-sm self-start pt-2 text-sky-700 pl-2">Bukan <b>{guest}</b>?</button>}
        </label>

        <label className="block flex flex-col w-full">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Ucapan
          </span>
          <textarea value={wish} name="wish" onChange={updateValue('wish')} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Selamat yaa!" />
        </label>
        <Button text={loading ? 'Mengirim' : 'Kirim'} className="mt-8 w-full" onClick={sendWish} loading={loading} />
    </>
  )
}

export default memo(FormWish);
