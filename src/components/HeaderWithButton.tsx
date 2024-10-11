import React from 'react';
import Back from "../assets/icons/back.svg";

interface HeaderWithButtonProps {
  title: string;
  onClick: () => void;
}

export const HeaderWithButton: React.FC<HeaderWithButtonProps> = ({ title, onClick }) => {
  return (
    <div className="flex items-center justify-between py-4">
    <button
      onClick={onClick}
      className="flex items-center p-2 focus:outline-none" 
    >
      <img src={Back} alt="Back" />
    </button>
      
      <h1 className="flex-grow text-center font-extrabold lg:text-base text-[#1A1C1E] transform translate-x-[-20px]">
        {title}
      </h1>
    </div>
  );
};
