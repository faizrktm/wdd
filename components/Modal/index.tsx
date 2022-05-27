import { PropsWithChildren } from 'react';
import {createPortal} from 'react-dom';

interface ModalProps {
  show?: boolean;
  onClose?: () => void;
  title?: string;
  raw?: boolean;
}

function ModalContainer({ title, children, show = true, onClose, raw }: PropsWithChildren<ModalProps>) {
  const rawStyle = raw ? '' : 'p-4';
  const rawStyleModal = raw ? '' : 'bg-white rounded-lg shadow';
  return (
    <div tabIndex={-1} aria-hidden={show ? 'false' : 'true'} className={`${show ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal bg-neutral-900/60`}>
      <div className={`relative h-full w-full max-w-2xl flex align-center justify-center flex-col ${rawStyle}`}>
          <div className={`relative w-full max-w-2xl h-min ${rawStyleModal}`}>
            {!raw && (
                <div className="flex justify-between items-start p-4 rounded-t border-b">
                  {title ?
                    <h3 className="text-xl font-poppins font-semibold text-gray-900">
                      {title}
                    </h3>
                  : null}
                  <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-primary hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
              )}
              <div>
                {children}
              </div>
          </div>
      </div>
      {raw && (
        <button onClick={onClose} type="button" className="absolute top-2 right-2 text-white bg-transparent hover:bg-primary rounded-lg text-lg p-1.5 ml-auto inline-flex items-center">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      )}
  </div>
  )
}

export default function Modal({ children, ...rest }: PropsWithChildren<ModalProps>){
  return createPortal(
    <ModalContainer {...rest}>
      {children}
    </ModalContainer>,
    document.body
  )
}
