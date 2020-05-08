import React from 'react';
import { bool } from 'prop-types';
import ThemeToggle from '../../Theme/ThemeToggle';

const Topnav = ({ open, theme, themeToggler }) => {
  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={themeToggler} />
    </>
  );
};

Topnav.propTypes = {
  open: bool.isRequired
};
export default Topnav;
