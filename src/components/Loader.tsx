import React from 'react';
import loadingGif from '../assets/loader.gif';

interface LoaderProps {
  title: string;
}

export const Loader: React.FC<LoaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      <img src={loadingGif} alt="Loading..." className="max-w-full h-auto" />
      <h2 className="font-extrabold lg:text-base text-[#1A1C1E]">{title}</h2>
    </div>
  );
};
