import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ startTour, stopTour, meshes, selectMesh }) => {
  return (
    <div className="control-panel">
      <button onClick={stopTour} className="stop-tour-btn">
        Stop
      </button>
      <ul className="mesh-list">
        {meshes.map((mesh, i) => (
          <li key={i} onClick={() => selectMesh(i)}>
            {mesh.name}
          </li>
        ))}
      </ul>
      <button>Info</button>
    </div>
  );
};

export default ControlPanel;
