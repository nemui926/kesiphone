import React from 'react';
import { Power, PowerOff } from 'lucide-react';
import { APPLIANCES } from '../constants/appliances';

interface StatusDisplayProps {
  applianceStatuses: Record<string, 'on' | 'off'>;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({ applianceStatuses }) => {
  // Group appliances by type (lights and others)
  const groupedAppliances = APPLIANCES.reduce((acc, appliance) => {
    const isLight = appliance.id.startsWith('light-');
    const group = isLight ? 'lights' : 'others';
    if (!acc[group]) acc[group] = [];
    acc[group].push(appliance);
    return acc;
  }, {} as Record<string, typeof APPLIANCES>);

  const renderApplianceStatus = (appliance: typeof APPLIANCES[0]) => {
    const status = applianceStatuses[appliance.id];
    const isOff = status === 'off';

    return (
      <div
        key={appliance.id}
        className="flex items-center justify-between py-2 px-4 rounded-lg bg-gray-50"
      >
        <span className="text-sm text-gray-700">{appliance.nameJa}</span>
        <div className="flex items-center">
          <span className={`text-sm mr-2 ${isOff ? 'text-red-600' : 'text-green-600'}`}>
            {isOff ? 'オフ' : 'オン'}
          </span>
          {isOff ? (
            <PowerOff size={16} className="text-red-600" />
          ) : (
            <Power size={16} className="text-green-600" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-800 mb-4">機器の状態</h3>
      
      {/* Lights section */}
      {groupedAppliances.lights && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">照明</h4>
          <div className="space-y-2">
            {groupedAppliances.lights.map(renderApplianceStatus)}
          </div>
        </div>
      )}
      
      {/* Other appliances section */}
      {groupedAppliances.others && (
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-2">その他の家電</h4>
          <div className="space-y-2">
            {groupedAppliances.others.map(renderApplianceStatus)}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusDisplay;