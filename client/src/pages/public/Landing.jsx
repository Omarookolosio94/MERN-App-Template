import React from 'react';
import {
  PageWrapper,
  H1,
  LandingWrapper
} from '../../components/Fixed/PagesStyled';
import { Img } from '../../utils/default/img';
import { Button, Icon } from '../../components/Fixed/Styled';
import { Link } from 'react-router-dom';

const Landing = () => {
  const theme = window.localStorage.getItem('theme');

  return (
    <PageWrapper theme={theme}>
      <LandingWrapper>
        <div class="land-action">
          <p>
            Hi, I am <span class="text-bold">Okolosio</span> and have got good
            news for you
          </p>
          <H1 theme={theme}>
            &apos;Building Your Web application just got easier&apos;
          </H1>

          <div class="land-detail">
            <p class>
              I am a Web Developer and I design mobile-friendly web applications
              using Javascript as a core language. Besides programming I am
              passionate about the environment and its conservation.
            </p>

            <Button theme={theme}>
              <Link className="navlink" to="/okolosio/contact">
                <Icon theme={theme}>
                  <i className="fal fa-globe"></i>
                  <span className="text">Start Building</span>
                </Icon>
              </Link>
            </Button>
          </div>
        </div>
        <div class="pro-auth">
          <div class="pro-img">
            <img
              src={theme === 'light' ? Img.potraitlight : Img.potraitdark}
              alt=""
            />
          </div>
        </div>
      </LandingWrapper>
    </PageWrapper>
  );
};

export default Landing;
