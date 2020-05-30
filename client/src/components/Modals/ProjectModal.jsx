import React, { useRef } from 'react';
import { ModalProject, ModalContent } from '../Fixed/ModalProject';
import { Button, Icon } from '../Fixed/Styled';
import { useOnClickOutside } from '../../hooks';
import { PageTitle } from '../Fixed/LandingStyle';

const ProjectModal = ({ open, close, theme, data }) => {
  const node = useRef();
  useOnClickOutside(node, () => close());

  return (
    <ModalProject open={open && open} theme={theme}>
      {data && (
        <ModalContent theme={theme} ref={node}>
          <div className="modal-btn">
            <PageTitle theme={theme}>{data.name}</PageTitle>
            <Button theme={theme} onClick={() => close()} light>
              <Icon theme={theme}>
                Close <i className="fal fa-times"></i>
              </Icon>
            </Button>
          </div>
          <div className="pro-detail">
            <p className="description">{data.description}</p>
            <div className="tech">
              <p className="text-bold">Language</p>
              <div>
                {data.tech.map((el, index) => (
                  <span key={index}>{el},</span>
                ))}
              </div>
            </div>
            <div className="features">
              <p className="text-bold">Features</p>
              <div>
                {data.features.map((el, index) => (
                  <span key={index}>{el},</span>
                ))}
              </div>
            </div>
            <div className="link">
              <a
                className="text-bold"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fal fa-link mr"></i> Visit Live
              </a>
            </div>
          </div>
        </ModalContent>
      )}
    </ModalProject>
  );
};

export default ProjectModal;
