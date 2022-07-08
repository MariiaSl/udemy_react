import React, { memo } from 'react';

const ResetBtn = ({ onReset }) => {
  console.log('Reset');
  return (
    <button type="button" className="reset-btn" onClick={onReset}>
      Reset
    </button>
  );
};

export default memo(ResetBtn);
