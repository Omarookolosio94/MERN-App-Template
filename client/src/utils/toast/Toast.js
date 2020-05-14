import React from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { AlertBox } from '../../components/Fixed/Styled';

export default ({ msg, type = 'default', duration = 5000 }) => {
  const theme = window.localStorage.getItem('theme');
  const alertType = type && type;
  let icon;

  switch (type) {
    case (type = 'success'):
      icon = 'fal fa-check-circle';
      break;
    case (type = 'danger'):
      icon = 'fal fa-ban';
      break;
    default:
      return (icon = '');
  }

  toaster.notify(
    ({ onClose }) => (
      <AlertBox theme={theme} className={alertType}>
        {type && <i className={icon} onClick={onClose}></i>}
        <span>{msg}</span>
        <i className="fal fa-times alert-icon" onClick={onClose}></i>
      </AlertBox>
    ),
    {
      duration: duration
      // position: 'top-right'
    }
  );
};
