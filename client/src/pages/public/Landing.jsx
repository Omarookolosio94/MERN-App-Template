import React from 'react';
import {
  PageWrapper,
  H1,
  LandingWrapper
} from '../../components/Fixed/LandingStyle';
import { Button, Icon } from '../../components/Fixed/Styled';
import { Link } from 'react-router-dom';
import contents from '../../utils/contents/contents';

const Landing = () => {
  const theme = window.localStorage.getItem('theme');

  const content = contents.home;
  const {
    para1,
    para2,
    para3,
    para4,
    buttonName,
    imgLight,
    imgDark,
    portName
  } = content;

  return (
    <PageWrapper theme={theme}>
      <LandingWrapper>
        <div className="land-action">
          <p>
            {para1} <span className="text-bold">{portName}</span> {para2}
          </p>
          <H1 theme={theme}>&apos;{para3}&apos;</H1>

          <div className="land-detail">
            <p>{para4}</p>

            <Button theme={theme} success>
              <Link className="navlink" to="/okolosio/contact">
                <Icon theme={theme}>
                  <i className="fal fa-globe"></i>
                  <span className="text">{buttonName}</span>
                </Icon>
              </Link>
            </Button>
          </div>
        </div>
        <div className="pro-auth">
          <div className="pro-img">
            <img src={theme === 'light' ? imgLight : imgDark} alt={portName} />
          </div>
        </div>
      </LandingWrapper>
    </PageWrapper>
  );
};

export default Landing;
