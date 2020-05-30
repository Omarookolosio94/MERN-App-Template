import React, { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  Paragraph
} from '../../components/Fixed/LandingStyle';
import { SKillsWrapper, ContentBox } from '../../components/Fixed/SkillsStyled';
import contents from '../../utils/contents/contents';
import { ProjectBox, Project } from '../../components/Fixed/ProjectStyled';
import ProjectModal from '../../components/Modals/ProjectModal';

const Projects = () => {
  const theme = window.localStorage.getItem('theme');

  const { title, project } = contents.projects;
  const [projectModal, openProjectModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const clickAction = (data) => {
    openProjectModal(true);
    setModalData(data);
  };

  return (
    <PageWrapper theme={theme}>
      <SKillsWrapper theme={theme}>
        <ContentBox>
          <PageTitle theme={theme}>{title}</PageTitle>
        </ContentBox>
        <ProjectBox theme={theme}>
          {project &&
            project.map((pro, index) => (
              <Project
                key={index}
                theme={theme}
                onClick={() => clickAction(pro)}
              >
                <p className="text-bold">{pro.name}</p>
                <Paragraph theme={theme}>{pro.summary}</Paragraph>
              </Project>
            ))}
        </ProjectBox>
      </SKillsWrapper>
      <ProjectModal
        open={projectModal}
        close={() => openProjectModal(false)}
        data={modalData}
        theme={theme}
      />
    </PageWrapper>
  );
};

export default Projects;
