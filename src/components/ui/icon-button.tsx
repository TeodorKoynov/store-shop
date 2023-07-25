import { MouseEventHandler } from 'react';
import { cn } from '@/lib/utils';

export type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: React.ReactElement;
};

export const IconButton: React.FC<IconButtonProps> = ({ onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110',
        className
      )}
    >
      {icon}
    </button>
  );
};
