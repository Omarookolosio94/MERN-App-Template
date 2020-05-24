import React, { useRef } from 'react';
import { ModalProject, ModalContent } from '../Fixed/ModalProject';
import { Button, Icon } from '../Fixed/Styled';
import { useOnClickOutside } from '../../hooks';
import { PageTitle } from '../Fixed/LandingStyle';

const ProjectModal = ({ open, close, theme, data }) => {
  const node = useRef();
  useOnClickOutside(node, () => close());
  console.log(data);

  return (
    <ModalProject open={open && open} theme={theme}>
      {data && (
        <ModalContent theme={theme} ref={node}>
          <div className="modal-btn">
            <PageTitle theme={theme}>{data.name}</PageTitle>
            <Button theme={theme} onClick={() => close()} light>
              <Icon>
                <i className="fal fa-times"></i>
              </Icon>
            </Button>
          </div>
          <div className="pro-detail">
            <p className="description">{data.description}</p>
          </div>
        </ModalContent>
      )}
    </ModalProject>
  );
};

export default ProjectModal;
