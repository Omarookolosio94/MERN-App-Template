import React from 'react';
import { func, string } from 'prop-types';
import { Button } from '../Fixed/Styled';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const icon =
    theme && theme === 'dark' ? 'fal fa-toggle-on' : 'fal fa-toggle-off';
  return (
    <Button onClick={toggleTheme} light>
      <i className={icon}></i>
      {theme}
    </Button>
  );
};

ThemeToggle.propTypes = {
  //   theme: string.isRequired,
  toggleTheme: func.isRequired
};
export default ThemeToggle;
