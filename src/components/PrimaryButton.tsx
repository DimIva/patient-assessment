import React from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled: boolean;
  children: React.ReactNode; 
}

export const Button: React.FC<ButtonProps> = ({ onClick, className, disabled, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full items-center justify-center p-[13px_24px] gap-[10px] rounded-[70px] ${className}`} 
    >
      {children}
    </button>
  );
};
