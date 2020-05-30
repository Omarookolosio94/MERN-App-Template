import React from 'react';
import {
  PageWrapper,
  PageTitle,
  Paragraph
} from '../../components/Fixed/LandingStyle';
import {
  SKillsWrapper,
  ContentBox,
  SkillBox,
  SKill
} from '../../components/Fixed/SkillsStyled';
import { Link } from 'react-router-dom';
import contents from '../../utils/contents/contents';

const Skills = () => {
  const theme = window.localStorage.getItem('theme');

  const { title, para1, currentPosition, skill } = contents.skills;

  return (
    <PageWrapper theme={theme}>
      <SKillsWrapper theme={theme}>
        <ContentBox>
          <PageTitle theme={theme}>{title}</PageTitle>
          <div className="details">
            <Paragraph theme={theme}>{para1}</Paragraph>
            <Paragraph theme={theme}>
              {currentPosition.positon}{' '}
              <a
                href={currentPosition.companyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentPosition.company}
              </a>{' '}
              {currentPosition.location}{' '}
              <Link to={currentPosition.linkTo}>{currentPosition.link}</Link>{' '}
              {currentPosition.action}
            </Paragraph>
          </div>
        </ContentBox>
        <SkillBox theme={theme}>
          {skill &&
            skill.map((ski, index) => (
              <SKill key={index} theme={theme}>
                <div className="logo">
                  <i class={ski.icon}></i>
                </div>
                <div className="detail">
                  <p>{ski.name}</p>
                </div>
              </SKill>
            ))}
        </SkillBox>
      </SKillsWrapper>
    </PageWrapper>
  );
};

// Skills.propTypes = {

// }

export default Skills;
