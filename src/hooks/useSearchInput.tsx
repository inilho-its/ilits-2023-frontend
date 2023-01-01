import shallow from 'zustand/shallow';

import useSearchInputStore from '@/store/useSearchInputStore';

export default function useSearchInput() {
  const { buttonText, status, disable, isVerified } = useSearchInputStore(
    (state) => ({
      buttonText: state.text,
      status: state.status,
      disable: state.disable,
      isVerified: state.isVerified,
    }),
    shallow
  );
  return { buttonText, status, disable, isVerified };
}
