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
      const resp = await mutate({ name: guest });
      if(resp) {
        setSuccess(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  if(success) {
    return (
      <div className="p-4">
        <p className="mb-6">Terima kasih {guest}! kami tunggu kehadiran kamu ya!</p>
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
        <label className="block flex flex-col w-full mb-6">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-blackish">
          Nama Kamu
        </span>
        <input value={guest} type="text" onChange={e => setGuest(e?.currentTarget?.value || '')} name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
      </label>
      ) : <p className="mb-4">Silahkan konfirmasi kehadiranmu, {guest}.</p>}
      <Button loading={loading} text="Konfirmasi Kehadiran" type="primary" onClick={handleConfirm} className="w-full" />
    </div>
  )
}


function ButtonRsvp(){
  const showModal = useShowModal();

  const { rsvp, guest } = useGuest();

  if (rsvp) {
    return (
      <div className="text-center">
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
    <Button text="RSVP" onClick={() => showModal(<ModalRsvp />)} className="mb-8 text-lg w-full" />
  )
}

export default function Reserve(){
  return (
    <ModalProvider>
      <div className="px-4 w-full">
        <ButtonRsvp />
      </div>
    </ModalProvider>
  )
}
