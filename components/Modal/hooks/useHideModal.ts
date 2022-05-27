import { useCallback } from 'react';
import useSafeContext from '@/hooks/useSafeContext';

import { ModalContext, defaultValue } from '../Context';

export default function useHideModal(){
  const setModal = useSafeContext(ModalContext);

  const hideModal = useCallback(() => {
    setModal(defaultValue)
  }, []);

  return hideModal;
}
