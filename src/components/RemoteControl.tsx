import React, { useState } from 'react';
import ApplianceSelect from './ApplianceSelect';
import PowerButton from './PowerButton';
import ResultDisplay from './ResultDisplay';
import StatusDisplay from './StatusDisplay';
import { AppState } from '../types';
import { APPLIANCES } from '../constants/appliances';

const RemoteControl: React.FC = () => {
  const [state, setState] = useState<AppState>({
    selectedApplianceId: null,
    lastAction: null,
    isLoading: false,
    error: null,
    applianceStatuses: APPLIANCES.reduce((acc, appliance) => ({
      ...acc,
      [appliance.id]: 'on' as const
    }), {})
  });

  const handleApplianceChange = (applianceId: string) => {
    setState({
      ...state,
      selectedApplianceId: applianceId,
      lastAction: null,
      error: null,
    });
  };

  const handlePowerToggle = async () => {
    if (!state.selectedApplianceId) return;

    setState({ ...state, isLoading: true, error: null });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const currentStatus = state.applianceStatuses[state.selectedApplianceId];
    const newStatus = currentStatus === 'on' ? 'off' : 'on';

    setState({
      ...state,
      lastAction: state.selectedApplianceId,
      isLoading: false,
      applianceStatuses: {
        ...state.applianceStatuses,
        [state.selectedApplianceId]: newStatus
      }
    });
  };

  const selectedApplianceStatus = state.selectedApplianceId 
    ? state.applianceStatuses[state.selectedApplianceId]
    : null;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <ApplianceSelect
          selectedApplianceId={state.selectedApplianceId}
          onChange={handleApplianceChange}
        />
        
        <div className="mt-8">
          <PowerButton
            disabled={!state.selectedApplianceId}
            onClick={handlePowerToggle}
            isLoading={state.isLoading}
            isPowerOn={selectedApplianceStatus === 'on'}
          />
        </div>
        
        <ResultDisplay
          lastAction={state.lastAction}
          error={state.error}
          status={selectedApplianceStatus}
        />

        <div className="mt-8 pt-6 border-t border-gray-100">
          <StatusDisplay applianceStatuses={state.applianceStatuses} />
        </div>
      </div>
    </div>
  );
};

export default RemoteControl