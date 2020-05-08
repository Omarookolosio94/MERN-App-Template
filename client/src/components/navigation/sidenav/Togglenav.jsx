import React from 'react';
import { bool } from 'prop-types';
import { Icon, Navtoggle } from '../../Fixed/Styled';

const Togglenav = ({ open, theme, setOpen }) => {
  return (
    <Navtoggle theme={theme} open={open} onClick={() => setOpen(!open)}>
      <Icon theme={theme}>
        <i className="fal fa-bars"></i>
      </Icon>
    </Navtoggle>
  );
};

Togglenav.propTypes = {
  open: bool.isRequired
};
export default Togglenav;
