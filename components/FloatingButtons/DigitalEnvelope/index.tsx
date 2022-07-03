import CircleButton from "@/components/Button/Circle";
import ModalProvider from "@/components/Modal/Context";
import useShowModal from "@/components/Modal/hooks/useShowModal";
import dynamic from 'next/dynamic';

const ModalEnvelope = dynamic(() => import('./ModalEnvelope'));

function CtaEnvelope() {
  const showModal = useShowModal();
  return <CircleButton type="primary" className="w-[60px] h-[60px]" text={<img alt="digital envelope" src="/images/love-letter.svg" width={36} height={36} />} onClick={() => showModal(<ModalEnvelope />, 'Amplop Digital')} />
}

export default function DigitalEnvelope() {
  return (
    <ModalProvider>
      <CtaEnvelope />
    </ModalProvider>
  );
}
