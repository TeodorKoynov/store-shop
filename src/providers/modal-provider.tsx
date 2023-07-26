'use client';

import { useEffect, useState } from 'react';
import { PreviewModal } from '@/components/preview-modal';

export type ModalProviderProps = unknown;

export const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};
