import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Appliance } from '../types';
import { APPLIANCES } from '../constants/appliances';
import { getLucideIcon } from '../utils/iconUtils';

interface ApplianceSelectProps {
  selectedApplianceId: string | null;
  onChange: (applianceId: string) => void;
}

const ApplianceSelect: React.FC<ApplianceSelectProps> = ({
  selectedApplianceId,
  onChange,
}) => {
  const selectedAppliance = APPLIANCES.find(app => app.id === selectedApplianceId);

  // Group appliances by type
  const groupedAppliances = APPLIANCES.reduce((acc, appliance) => {
    const isLight = appliance.id.startsWith('light-');
    const group = isLight ? 'lights' : 'others';
    if (!acc[group]) acc[group] = [];
    acc[group].push(appliance);
    return acc;
  }, {} as Record<string, Appliance[]>);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        操作する家電を選択してください
      </label>
      <div className="relative">
        <select
          value={selectedApplianceId || ''}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none border transition-colors duration-200"
        >
          <option value="" disabled>
            家電を選択...
          </option>
          
          {/* Lights group */}
          {groupedAppliances.lights && groupedAppliances.lights.length > 0 && (
            <optgroup label="照明">
              {groupedAppliances.lights.map((appliance) => (
                <option key={appliance.id} value={appliance.id}>
                  {appliance.nameJa}
                </option>
              ))}
            </optgroup>
          )}
          
          {/* Other appliances */}
          {groupedAppliances.others && groupedAppliances.others.length > 0 && (
            <optgroup label="その他の家電">
              {groupedAppliances.others.map((appliance) => (
                <option key={appliance.id} value={appliance.id}>
                  {appliance.nameJa}
                </option>
              ))}
            </optgroup>
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <ChevronDown size={20} />
        </div>
      </div>

      {selectedAppliance && (
        <div className="mt-4 flex justify-center">
          <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center">
            {React.createElement(getLucideIcon(selectedAppliance.icon), {
              size: 48,
              className: "text-blue-500",
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplianceSelect;