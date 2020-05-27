import React from 'react';
import { ErrorWrapper, ErrorMsg } from '../../components/Fixed/ErrorStyled';
import { Link } from 'react-router-dom';
import { Icon, Button } from '../../components/Fixed/Styled';

const Error = () => {
  const theme = window.localStorage.getItem('theme');

  return (
    <>
      <ErrorWrapper theme={theme}>
        <ErrorMsg theme={theme}>
          <div className="error">
            <h1>404</h1>
            <p>Page Not Found</p>
            <Button theme={theme} success>
              <Link className="navlink" to="/">
                <Icon theme={theme}>
                  <i className="fal fa-home"></i>
                  <span className="text">Return Home</span>
                </Icon>
              </Link>
            </Button>
          </div>
        </ErrorMsg>
      </ErrorWrapper>
    </>
  );
};

export default Error;
