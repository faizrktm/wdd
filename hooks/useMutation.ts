import { useState } from 'react';

interface MutationProps {
  validator?: (payload: Record<string, unknown>) => string | undefined;
  url: string;
}

export default function useMutation({ url, validator }: MutationProps){
  const [status, setStatus] = useState('idle');

  const mutate = async (payload: Record<string, unknown>) => {
    setStatus('loading');

    if(validator && typeof validator === 'function') {
      const validation = validator(payload);

      if(validation !== undefined) {
        setStatus(validation);
        return;
      }
    }

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          payload,
        )
      });

      const response = await res.json();

      if(!res.ok) {
        throw new Error(response.message);
      }

      setStatus('idle');

      return response;
    } catch (error) {
      const e = error as Error;
      setStatus(e.message);

      return Promise.reject(e);
    }

  }

  return {
    mutate,
    loading: status === 'loading',
    error: status !== 'loading' && status !== 'idle' ? status : null,
  }
}
