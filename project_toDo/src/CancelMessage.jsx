import React from 'react';

const CancelMessage = () => {
  return (
    <li className="list-item">
      <span className="list-item__checkbox">Spinner</span>
      <span className="list-item__text">Do you want to cancel?</span>
      <button className="list-item__delete-btn" type="button" onClick={() => {}}>
        Cancel
      </button>
    </li>
  );
};

export default CancelMessage;
