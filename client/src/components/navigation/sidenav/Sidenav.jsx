import React from 'react';
import { bool } from 'prop-types';
import Togglenav from './Togglenav';
import Navlinks from './Navlinks';

const Sidenav = ({ open, theme, setOpen }) => {
  return (
    <>
      <Togglenav open={open} theme={theme} setOpen={setOpen} />
      <Navlinks theme={theme} open={open} />
    </>
  );
};

Sidenav.propTypes = {
  open: bool.isRequired
};
export default Sidenav;
