import React from 'react';
import { PageWrapper, PageTitle } from '../../components/Fixed/LandingStyle';
import {
  SKillsWrapper,
  ContentBox,
  SkillBox
} from '../../components/Fixed/SkillsStyled';

const Skills = () => {
  const theme = window.localStorage.getItem('theme');

  return (
    <PageWrapper theme={theme}>
      <SKillsWrapper theme={theme}>
        <ContentBox>
          <PageTitle theme={theme}>Skills and Experience</PageTitle>
        </ContentBox>
      </SKillsWrapper>
    </PageWrapper>
  );
};

// Skills.propTypes = {

// }

export default Skills;
