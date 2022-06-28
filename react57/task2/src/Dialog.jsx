import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ onCLose, isOpen, children, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h5 className="dialog__title">{title}</h5>
        <span className="dialog__close-btn" onClick={onCLose}>
          +
        </span>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

Dialog.propTypes = {
  onCLose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

Dialog.defaultProps = {
  title: '',
  isOpen: false,
};

export default Dialog;
