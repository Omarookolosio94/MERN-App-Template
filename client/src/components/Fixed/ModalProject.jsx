import styled from 'styled-components';
import '../../App.scss';

export const ModalProject = styled.div`
  position: fixed;
  top: ${({ open }) => (open === false ? '-100%' : '0')};
  left: 0;
  height: 100%;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
      : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 400px;
  padding: 10px;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  background-color: ${({ theme }) =>
    theme === 'light' ? '#E4E4E4' : '#363537'};

  .modal-btn {
    display: flex;
    border: 1px solid red;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: block;
    height: auto;
  }
  .list-item {
    list-style: none;
  }
  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;
