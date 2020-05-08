import styled from 'styled-components';
import '../../App.scss';
import img from '../../img/coding.jpg';

export const Container = styled.div`
  z-index: 3;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

export const NavWrapper = styled.div`
  height: 100vh;
  top: 0;
  left: 0;
  transition: all 0.2s linear;
  background: ${({ theme }) => (theme === 'dark' ? '#bcbabe' : '#363537')};
  color: ${({ theme }) => (theme === 'dark' ? '#FAFAFA' : '#363537')};
  width: ${({ open }) => (open ? '150px' : '40px')};

  /* &:hover {
    width: 150px;
    transition: all 0.2s linear;
  } */
`;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const Icon = styled.button`
  /* width: 100%; */
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => (theme == 'light' ? '#FAFAFA' : '#363537')};

  .fal {
    font-size: 1rem;
    padding: 5px;
    color: ${({ theme }) => (theme == 'light' ? '#FAFAFA' : '#363537')};
  }
`;

export const Button = styled.button`
  background: transparent;
  border: ${({ theme }) => theme.border};
  border: ${({ light }) => `none`};
  color: ${({ theme }) => theme.text};
  padding: 6px 6px;
  font-size: 14px !important;
  text-transform: capitalize;
  margin-right: 5px;
  outline: none;
  cursor: pointer;
  transition-duration: 0.4s;

  .fal {
    margin-right: 5px;
    color: ${({ theme }) => theme.text};
  }

  ${({ light, danger, success }) => {
    switch (true) {
      case light:
        return `
        .fal {
          color: none;
        }        
          `;
      case danger:
        return `
        .fal {
          color:#dc3545;            
        } `;
      case success:
        return ` 
        .fal {
          color: #28a745;
        }`;
      default:
        return `
        .fal {
          color: none;
        }
        `;
    }
  }}

  &:hover {
    ${({ light, danger, success }) => {
      switch (true) {
        case light:
          return `border : none;        
          `;
        case danger:
          return `border : 1px solid #dc3545;            
          `;
        case success:
          return `border : 1px solid #28a745`;
        default:
          return `border : 1px solid none`;
      }
    }}
  }
`;

//NavLink

export const Navtoggle = styled.div`
  width: 100%;
  padding: 6px 0;
  &:hover {
    background-color: ${({ theme }) =>
      theme == 'dark' ? '#363537' : '#e4e4e4'};

    .fal {
      color: ${({ theme }) => (theme == 'dark' ? '#FAFAFA' : '#363537')};
    }
  }
`;

//nav link box
export const Linkbox = styled.div`
  width: 100%;
  margin-top: 30vh;

  .navlink {
    width: ${({ open }) => (open ? '150px' : '40px')};
    padding: 6px 0;
    transition: all 0.2s linear;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: ${({ theme }) => (theme == 'light' ? '#FAFAFA' : '#363537')};
    text-decoration: none;

    .fal {
      margin-right: 4px;
    }

    &:hover {
      color: ${({ theme }) => (theme == 'dark' ? '#FAFAFA' : '#363537')};
      background-color: ${({ theme }) =>
        theme == 'dark' ? '#363537' : '#e4e4e4'};

      .fal {
        color: ${({ theme }) => (theme == 'dark' ? '#FAFAFA' : '#363537')};
      }
    }
  }
`;
