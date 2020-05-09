import styled from 'styled-components';
import '../../App.scss';
// import img from '../../img/landscape2.jpg';

export const Modal = styled.div`
  position: fixed;
  top: 38px;
  right: ${({ open }) => (open === false ? '-20px' : '10px')};
  height: 400px;
  overflow: hidden;
  transition: all 0.2s linear;
  width: ${({ open }) => (open === false ? '0px' : '250px')};
  background-color: ${({ theme }) =>
    theme === 'light' ? '#E4E4E4' : '#363537'};
  box-shadow: ${({ theme }) =>
    theme === 'dark'
      ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
      : ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'};
  z-index: 50;

  @media only screen and (max-width: 768px) {
    height: 350px;
    width: ${({ open }) => (open === false ? '0px' : '200px')};
  }

  @media only screen and (max-width: 600px) {
    height: 300px;
    width: ${({ open }) => (open === false ? '0px' : '200px')};
  }
`;
