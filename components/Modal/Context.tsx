import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction, ReactNode } from 'react';
import Modal from '.';

type ModalContextValue = Dispatch<SetStateAction<{}>>;

export const ModalContext = createContext<ModalContextValue | undefined | symbol>(undefined);

interface ModalValue {
  show: boolean;
  title: string;
  content: ReactNode;
  raw: boolean;
}

export const defaultValue = {
  show: false,
  title: '',
  content: null,
  raw: false,
}

export default function ModalProvider({ children }: PropsWithChildren<{}>){
  const [{ show, title, content, raw }, setModalValue] = useState<ModalValue>(defaultValue);

  return (
    <ModalContext.Provider value={setModalValue}>{children}
      <Modal raw={raw} show={show} title={title} onClose={() => setModalValue(defaultValue)}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}
