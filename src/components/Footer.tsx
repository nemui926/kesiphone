import React from 'react';
import { Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 px-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 消phone (けしふぉん)</p>
          
          <div className="flex items-center mt-2 sm:mt-0">
            <Info size={16} className="mr-1" />
            <p>このアプリはシミュレーションモードで動作しています</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;