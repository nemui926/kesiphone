import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { APPLIANCES } from '../constants/appliances';

interface ResultDisplayProps {
  lastAction: string | null;
  error: string | null;
  status: 'on' | 'off' | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ lastAction, error, status }) => {
  if (!lastAction && !error) return null;

  const applianceId = lastAction;
  const appliance = applianceId ? APPLIANCES.find(app => app.id === applianceId) : null;

  return (
    <div className={`
      mt-8 p-4 rounded-lg border
      transition-all duration-500 transform
      ${error 
        ? 'bg-red-50 border-red-100 text-red-800' 
        : 'bg-green-50 border-green-100 text-green-800'
      }
    `}>
      <div className="flex items-center">
        {error ? (
          <>
            <XCircle className="text-red-500 mr-2" size={24} />
            <div>
              <p className="font-medium">エラーが発生しました</p>
              <p className="text-sm">{error}</p>
            </div>
          </>
        ) : appliance ? (
          <>
            <CheckCircle className="text-green-500 mr-2" size={24} />
            <div>
              <p className="font-medium">操作完了</p>
              <p className="text-sm">
                {appliance.nameJa}の電源を{status === 'off' ? 'オフ' : 'オン'}にしました
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ResultDisplay;