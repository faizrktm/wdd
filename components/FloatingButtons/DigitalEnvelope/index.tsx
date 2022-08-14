import { memo, useEffect, useState } from 'react';
import CircleButton from "@/components/Button/Circle";
import ModalProvider from "@/components/Modal/Context";
import useShowModal from "@/components/Modal/hooks/useShowModal";
import dynamic from 'next/dynamic';

const ModalEnvelope = dynamic(() => import('./ModalEnvelope'));

function CtaEnvelope() {
  const showModal = useShowModal();
  return <CircleButton type="primary" className="w-[60px] h-[60px]" text={<img alt="digital envelope" src="/images/love-letter.svg" width={36} height={36} />} onClick={() => showModal(<ModalEnvelope />, 'Amplop Digital')} />
}

const styleOpacity = ['opacity-0', 'opacity-1'];

function DigitalEnvelope() {
  const [showTooltip, setShowTooltip] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTooltip(1);
    }, 7000);

    return () => {
      if(timeout) clearTimeout(timeout);
    }
  }, []);

  return (
    <ModalProvider>
      <div className="relative flex items-center">
        <div id="tooltip-left" role="tooltip" className={`flex relative transition-opacity ease-in-out duration-1000 items-center max-w-[230px] z-10 py-2 px-3 mr-3 text-xs text-white bg-primary rounded-lg shadow-lg ${styleOpacity[showTooltip]} tooltip`}>
          <p>Sekarang <b>amplopmu</b> bisa tersampaikan secara digital &#10084;&#65039;</p>
          <button onClick={() => setShowTooltip(0)} type="button" className="absolute top-0 right-0 text-white bg-transparent hover:bg-primary hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <CtaEnvelope />
      </div>
    </ModalProvider>
  );
}

export default memo(DigitalEnvelope);
