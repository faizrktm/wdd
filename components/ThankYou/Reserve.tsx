import { useState } from "react";

import ModalProvider from "@/components/Modal/Context";
import Button from "@/components/Button"
import useShowModal from "@/components/Modal/hooks/useShowModal";
import useHideModal from "@/components/Modal/hooks/useHideModal";
import { useGuest } from '@/contexts/Guest';
import useMutation from "@/hooks/useMutation";
import Alert from "@/components/Alert";

interface RadioRsvpProps {
  onChecked: (value: number) => void;
}

function RadioRsvp({onChecked}: RadioRsvpProps) {
  return (
    <ul className="grid gap-6 w-full md:grid-cols-3 mb-6">
        <li>
            <input type="radio" defaultChecked id="present" onChange={() => onChecked(1)} name="hosting" value="present" className="hidden peer" required />
            <label htmlFor="present" className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100">
                <div className="block">
                    <div className="w-full text-md font-semibold">Hadir!</div>
                </div>
                <span className="text-2xl">&#128513;</span>
            </label>
        </li>
        <li>
            <input type="radio" id="not-present" onChange={() => onChecked(2)} name="hosting" value="not-present" className="hidden peer" />
            <label htmlFor="not-present" className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100">
                <div className="block">
                    <div className="w-full text-md font-semibold">Tidak Hadir</div>
                </div>
                <span className="text-2xl">&#128557;</span>
            </label>
        </li>
        <li>
            <input type="radio" id="hesitate" onChange={() => onChecked(3)} name="hosting" value="hesitate" className="hidden peer" />
            <label htmlFor="hesitate" className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                <div className="block">
                    <div className="w-full text-md font-semibold">Ragu-ragu</div>
                </div>
                <span className="text-2xl">&#129300;</span>
            </label>
        </li>
    </ul>
  )
}

function ModalRsvp() {
  const { guest: g } = useGuest();
  const [guest, setGuest] = useState(g);
  const [present, setPresent] = useState(1);
  const [success, setSuccess] = useState(false);

  const { mutate, loading, error } = useMutation({
    url: '/api/rsvp/post',
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
    if(present !== 1) {
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

      <RadioRsvp onChecked={(value: number) => { setPresent(value) }} />

      <Button loading={loading} text="Konfirmasi Kehadiran" type="primary" onClick={handleConfirm} className="w-full max-w-2xl" />
    </div>
  )
}


function ButtonRsvp(){
  const showModal = useShowModal();

  const { rsvpString, guest } = useGuest();

  if (rsvpString === 'yes') {
    return (
      <div className="text-center flex flex-col items-center justify-center px-4">
        <p className="text-sm mb-2 text-white">Terima kasih {guest}! kami tunggu kehadiran kamu ya!</p>
        <p className="text-sm mb-6 text-white">Namun, jika kamu berhalangan hadir, hubungi kami dengan menekan tombol dibawah ini.</p>
        <Button text="Hubungi Kami" onClick={() => {
          const newWindow = window.open('https://wa.me/6282282817744', '_blank', 'noopener,noreferrer');
          if (newWindow) newWindow.opener = null;
        }} className="mb-4" />
      </div>
    )
  }

  if (rsvpString === 'no' || rsvpString === 'hesitate') {
    return (
      <div className="text-center px-4 flex flex-col items-center justify-center">
        <p className="text-sm mb-2 text-white">Terima kasih {guest} atas konfirmasinya!</p>
        <p className="text-sm mb-6 text-white">Jika kamu berubah pikiran, silahkan konfirmasi kembali ya!</p>
        <Button text="RSVP" onClick={() => showModal(<ModalRsvp />)} className="mb-8 mx-auto text-lg w-full md:w-auto" />
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
