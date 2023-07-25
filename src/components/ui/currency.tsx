'use client';

import { useEffect, useState } from 'react';
import { formatter } from '@/lib/utils';

export type CurrencyProps = {
  value: number | string;
};

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <div className="font-semibold">{formatter.format(value)}</div>;
};
