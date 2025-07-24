import React from 'react';
import { PowerOff } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PowerOff size={28} className="text-white" />
          <div>
            <h1 className="text-2xl font-bold">消phone</h1>
            <p className="text-xs text-blue-100">けしふぉん</p>
          </div>
        </div>
        <p className="text-sm hidden sm:block">簡易Webリモコン</p>
      </div>
    </header>
  );
};

export default Header;