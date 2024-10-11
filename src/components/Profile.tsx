import React from 'react';

interface ProfileProps {
  name: string; // User's name for greeting
  avatarUrl: string; // URL of the user's photo
}

export const Profile: React.FC<ProfileProps> = ({ name, avatarUrl }) => {
  const date = new Date(); // Get the current date

  // Format the date
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options).split(','); // Split into weekday and date


  return (
    <div className="flex justify-between items-center md:p-6 lg:p-8">
      <div className="flex items-center gap-[12px] md:gap-[16px] lg:gap-[20px]">
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="w-[42px] h-[42px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full border-2 border-gray-300"
        />
        <div>
          <p className="font-medium text-xs md:text-sm lg:text-base text-[#6C7278]">Welcome Back</p>
          <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#1A1C1E]">{name}</h2>
        </div>
      </div>
      <div>
        <div className="text-gray-600 text-right">
          <p className="font-medium text-xs md:text-sm lg:text-base text-[#6C7278]">{formattedDate[0]}</p> {/* Day of the week */}
          <p className="text-base md:text-lg lg:text-xl font-bold text-[#1A1C1E]">{formattedDate[1].trim()}</p> {/* Formatted date */}
        </div>
      </div>
    </div>
  );
};
