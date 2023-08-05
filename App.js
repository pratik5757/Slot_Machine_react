import React from 'react';
import SlotMach from './SlotMach';

const App = () => {
  return (
    <>
      <h1 className='heading_style'>
        🎰 Welcome to
        <span style={{ fontWeight: 'bold' }}>Slot Machine game</span> 🎰
      </h1>
      <div className='slotmachine'>
        <SlotMach x='😄' y='😄' z='😄' />
        <hr />
        <SlotMach x='😉' y='😄' z='😄' />
        <hr />
        <SlotMach x='😄' y='😄' z='👨‍🦰' />
        <hr />
        <SlotMach x='🚨' y='🚨' z='🚨' />
      </div>
    </>
  );
};

export default App;
