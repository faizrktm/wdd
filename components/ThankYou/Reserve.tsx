import { useState } from "react";

import ModalProvider from "@/components/Modal/Context";
import Button from "@/components/Button"
import useShowModal from "@/components/Modal/hooks/useShowModal";
import useHideModal from "@/components/Modal/hooks/useHideModal";
import { useGuest } from '@/contexts/Guest';
import useMutation from "@/hooks/useMutation";
import Alert from "@/components/Alert";

function ModalRsvp() {
  const { guest: g } = useGuest();
  const [guest, setGuest] = useState(g);
  const [present, setPresent] = useState(true);
  const [success, setSuccess] = useState(false);

  const { mutate, loading, error } = useMutation({
    url: '/api/rsvp',
    validator: (payload) => {
      if(!payload.name) return 'Maaf, nama harus diisi';

      return;
    }
  });

  const hideModal = useHideModal();

  const handleConfirm = async () => {
    try {
      const resp = await mutate({ name: guest, present });
      if(resp) {
        setSuccess(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  if(success) {
    let copyWriting = `Terima kasih ${guest}! kami tunggu kehadiran kamu ya, semoga sehat dan bahagia selalu!`;
    if(!present) {
      copyWriting = `Terima kasih ${guest}! Semoga sehat dan bahagia selalu!`;
    }
    return (
      <div className="p-4">
        <p className="mb-6">{copyWriting}</p>
        <Button text="Tutup" type="primary" onClick={hideModal} className="w-full" />
      </div>
    )
  }

  return (
    <div className="p-4">
      {Boolean(error) && (
        <Alert message={error} />
      )}
      {!Boolean(g) ? (
        <label className="block flex flex-col w-full mb-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blackish">
          Nama Kamu
        </span>
        <input value={guest} type="text" onChange={e => setGuest(e?.currentTarget?.value || '')} name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
      </label>
      ) : <p className="mb-4">Silahkan konfirmasi kehadiranmu, {guest}.</p>}

      <div className="flex items-center mb-6">
        <input id="present" type="checkbox" defaultChecked onChange={e => setPresent(Boolean(e?.target?.checked))} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="present" className="ml-2 text-sm font-medium text-gray-900">Saya Bisa Hadir</label>
      </div>

      <Button loading={loading} text="Konfirmasi Kehadiran" type="primary" onClick={handleConfirm} className="w-full max-w-2xl" />
    </div>
  )
}


function ButtonRsvp(){
  const showModal = useShowModal();

  const { rsvp, guest } = useGuest();

  if (rsvp) {
    return (
      <div className="text-center flex flex-col items-center justify-center">
        <p className="text-sm mb-2 text-white">Terima kasih {guest}! kami tunggu kehadiran kamu ya!</p>
        <p className="text-sm mb-6 text-white">Namun, jika kamu berhalangan hadir, hubungi kami dengan menekan tombol dibawah ini.</p>
        <Button text="Hubungi Kami" onClick={() => {
          const newWindow = window.open('https://wa.me/6282282817744', '_blank', 'noopener,noreferrer');
          if (newWindow) newWindow.opener = null;
        }} className="mb-4" />
      </div>
    )
  }

  return (
    <div className="px-4 text-center flex flex-col items-center justify-center">
      <Button text="RSVP" onClick={() => showModal(<ModalRsvp />)} className="mb-8 mx-auto text-lg w-full md:w-auto" />
    </div>
  )
}

export default function Reserve(){
  return (
    <ModalProvider>
      <div className="w-full">
        <ButtonRsvp />
      </div>
    </ModalProvider>
  )
}
