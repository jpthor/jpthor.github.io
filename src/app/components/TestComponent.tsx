import React from 'react';

export function TestComponent() {
  console.log('TestComponent rendering');
  return (
    <div style={{ 
      background: 'blue', 
      color: 'white', 
      padding: '20px', 
      margin: '20px', 
      border: '5px solid red',
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 9999
    }}>
      TEST COMPONENT VISIBLE
    </div>
  );
}
