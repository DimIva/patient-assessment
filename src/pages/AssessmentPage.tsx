import React, { useState } from 'react';
import { useMockData } from '../hooks/useMockData';

export const AssessmentPage: React.FC = () => {
  const { addMockData } = useMockData();
  const [newItem, setNewItem] = useState({ id: 0, cognitiveStatus: '', applicableMeasures: '', patient: '' }); // State for the new item

  const handleAddItem = async () => {
    await addMockData({ ...newItem, id: Date.now() }); // Generate a unique ID
    setNewItem({ id: 0, cognitiveStatus: '', applicableMeasures: '', patient: '' }); // Reset input fields
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={newItem.cognitiveStatus}
        onChange={(e) => setNewItem({ ...newItem, cognitiveStatus: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newItem.applicableMeasures}
        onChange={(e) => setNewItem({ ...newItem, applicableMeasures: e.target.value })}
      />

      <input
        type="text"
        placeholder="Patient"
        value={newItem.patient}
        onChange={(e) => setNewItem({ ...newItem, patient: e.target.value.toString() })}
      />
      <button onClick={handleAddItem}>Start assessment</button>
    </div>
  );
}