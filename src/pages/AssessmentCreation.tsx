import React, { useState } from 'react';
import { useMockData } from '../hooks/useMockData';
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';
import { Button } from '../components/PrimaryButton';
import { HeaderWithButton } from '../components/HeaderWithButton';

const optionsCognitiveStatus = [
  { value: 'Cognition 1', label: 'Cognition 1' },
  { value: 'Cognition 2', label: 'Cognition 2' },
  { value: 'Cognition 3', label: 'Cognition 3' },
];

const optionsApplicableMeasures = [
  { value: 'Measure 1', label: 'Measure 1' },
  { value: 'Measure 2', label: 'Measure 2' },
  { value: 'Measure 3', label: 'Measure 3' },
];

export const AssessmentCreation: React.FC = () => {
  const navigate = useNavigate();
  const { addMockData } = useMockData();
  const [newItem, setNewItem] = useState({ id: 0, cognitiveStatus: '', applicableMeasures: '', patient: '' });

  const handleAddItem = async () => {
    await addMockData({ ...newItem, id: Date.now() }); // Generate a unique ID
    setNewItem({ id: 0, cognitiveStatus: '', applicableMeasures: '', patient: '' }); // Reset input fields
    navigate('../assessment')
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <HeaderWithButton title="New assessment" onClick={() => navigate("../")} />

        {/* Cognitive Status Select */}
        <div className="mb-4">
          <label className={`block mb-1 ${!newItem.cognitiveStatus ? 'text-gray-400' : 'text-black'}`}>
            Cognitive status
          </label>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Select Cognitive Status</InputLabel>
            <Select
              value={newItem.cognitiveStatus}
              onChange={(e) => setNewItem({ ...newItem, cognitiveStatus: e.target.value })}
              label="Select Cognitive Status"
              className={!newItem.cognitiveStatus ? 'bg-gray-200' : ''} // Change background color if disabled
            >
              {optionsCognitiveStatus.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Applicable Measures Select */}
        <div className="mb-4">
          <label className={`block mb-1 ${!newItem.applicableMeasures ? 'text-gray-400' : 'text-black'}`}>
            Applicable measures
          </label>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Select Applicable Measures</InputLabel>
            <Select
              value={newItem.applicableMeasures}
              onChange={(e) => setNewItem({ ...newItem, applicableMeasures: e.target.value })}
              label="Select Applicable Measures"
              disabled={!newItem.cognitiveStatus} // Disable if cognitiveStatus is empty
              className={!newItem.cognitiveStatus ? 'bg-gray-200' : ''} // Change background color if disabled
            >
              {optionsApplicableMeasures.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="mb-4">
          <label className={`block mb-1 ${!newItem.patient ? 'text-gray-400' : 'text-black'}`}>
            Patient
          </label>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter patient name or ID"
            value={newItem.patient}
            onChange={(e) => setNewItem({ ...newItem, patient: e.target.value })}
            disabled={!newItem.applicableMeasures} // Disable if applicableMeasures is empty
            margin="normal"
            className={!newItem.applicableMeasures ? 'bg-gray-200' : ''} // Change background color if disabled
          />
        </div>
      </div>
      <Button
        onClick={handleAddItem}
        disabled={!newItem.cognitiveStatus || !newItem.applicableMeasures || !newItem.patient}
        className="bg-[#1A1C1E] mb-[15px] text-white font-bold text-lg md:min-w-60"
      >
        Start assessment
      </Button>
    </div>
  )
}