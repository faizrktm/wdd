import { ReactNode, useCallback } from 'react';
import useSafeContext from '@/hooks/useSafeContext';

import { ModalContext } from '../Context';

export default function useShowModal(){
  const setModal = useSafeContext(ModalContext);

  const showModal = useCallback((content: ReactNode, title?: string, raw?: boolean) => {
    setModal({
      show: true,
      title,
      content,
      raw: raw || false,
    })
  }, []);

  return showModal;
}
