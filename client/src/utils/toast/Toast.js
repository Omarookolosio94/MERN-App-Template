import React from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

export default ({
  msg = 'Error connecting. Please refresh',
  type = 'default',
  duration = 2000
}) => {
  const bgColor = `slick-alert alert-${type}`;
  let icon;

  type === 'success' || type === 'success-outline'
    ? (icon = 'alert-icon outline feather icon-check-circle')
    : (icon = '');

  toaster.notify(
    ({ onClose }) => (
      <div className={bgColor}>
        <i className={icon} onClick={onClose}></i>
        <span>{msg}</span>
        <i className="feather icon-x alert-icon" onClick={onClose}></i>
      </div>
    ),
    {
      duration: duration
      // , position: "top-right"
    }
  );
};
