import React from 'react';
import { Power, PowerOff } from 'lucide-react';

interface PowerButtonProps {
  disabled: boolean;
  onClick: () => void;
  isLoading: boolean;
  isPowerOn: boolean;
}

const PowerButton: React.FC<PowerButtonProps> = ({ disabled, onClick, isLoading, isPowerOn }) => {
  const Icon = isPowerOn ? PowerOff : Power;
  const text = isPowerOn ? '電源を切る' : '電源を入れる';
  const gradientColors = isPowerOn 
    ? 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
    : 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700';

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        w-full py-4 px-6 rounded-full font-bold text-white text-lg
        flex items-center justify-center space-x-2
        transition-all duration-300 transform 
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed opacity-70'
          : `bg-gradient-to-r ${gradientColors} active:scale-95 shadow-lg hover:shadow-xl`
        }
      `}
    >
      <Icon size={24} />
      <span className="ml-2">
        {isLoading ? '送信中...' : text}
      </span>
    </button>
  );
};

export default PowerButton;