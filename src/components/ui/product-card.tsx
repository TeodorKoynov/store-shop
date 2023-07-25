'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { Expand, ShoppingCart } from 'lucide-react';
import { Currency } from '@/components/ui/currency';
import { IconButton } from '@/components/ui/icon-button';

export type ProductCardProps = {
  data: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3">
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image className={'aspect-square rounded-md object-cover'} fill src={data.images[0].url} alt={'Image'} />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton onClick={() => {}} icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton onClick={() => {}} icon={<ShoppingCart size={20} className="text-gray-600" />} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};