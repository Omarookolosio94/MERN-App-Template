import styled from 'styled-components';
import '../../App.scss';

export const BodyWrapper = styled.div`
  width: 100%;
  height: 90vh;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transition: all 0.2s linear;
  background: ${({ theme }) => (theme === 'dark' ? '#bcbabe' : '#363537')};
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  width: ${({ open }) => (open ? '150px' : '40px')};

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: inline-block;
    height: auto;
    position: fixed;
    top: 0;
  }
`;

export const MainWrapper = styled.div`
  width: 95%;
  margin-left: ${({ open }) => (open ? '150px' : '40px')};
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  transition: all 0.2s linear;
  height: 100%;
  padding: 0;

  .container {
    width: 98%;
    margin: 0 auto;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 44px;
    margin-left: 0;
  }
`;

export const TopnavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 500;

  .social-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
  }

  .profile-link {
    display: flex;
    align-items: center;
    padding: 6px 0;

    .profilebtn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 0;
      margin: 0;
      border: ${({ theme }) =>
        theme === 'light' ? '1px solid #E4E4E4' : '1px solid  #363537'};

      img {
        width: 29.5px;
        height: 29.5px;
        border-radius: 50%;
      }

      :hover {
        border: ${({ theme }) =>
          theme === 'dark' ? '1px solid #E4E4E4' : '1px solid  #363537'};
      }
    }

    @media only screen and (max-width: 768px) {
    }
  }
`;

export const Href = styled.a`
  transition: all 0.2s linear;
  overflow: hidden;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  text-decoration: none;
  width: auto;
  display: flex;
  align-items: center;
  padding: 6px 8px;
  text-transform: capitalize;

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    background-color: ${({ theme }) =>
      theme === 'dark' ? '#363537' : '#e4e4e4'};

    .fal.fab {
      color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    }
  }

  i.fal,
  i.fab {
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  }

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    padding: 6px 0;
    border: ${({ theme }) =>
      theme === 'dark' ? '1px solid #363537' : '1px solid #e4e4e4'};

    &:hover {
      border: ${({ theme }) =>
        theme === 'light' ? '1px solid #363537' : '1px solid #e4e4e4'};
    }

    .linkname {
      display: none;
    }
  }
`;

export const Icon = styled.div`
  /* width: 100%; */
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};

  .fal,
  .fab {
    font-size: 1rem;
    padding: 5px;
    color: ${({ theme }) => (theme === 'light' ? '#E4E4E4' : '#363537')};
    margin-right: 10px;
  }

  .text {
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    font-size: 10px;
    text-transform: capitalize;
  }
  .text-normal {
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    font-size: 14px;
    text-transform: capitalize;
  }

  @media only screen and (max-width: 600px) {
    .text-normal {
      display: none;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
      : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};
  box-shadow: ${({ light }) => light && 'none'};
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  padding: 6px 6px;
  font-size: 14px !important;
  text-transform: capitalize;
  margin-right: 5px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s linear;
  transition-duration: 0.4s;

  .navlink {
    text-decoration: none;
  }

  .fal {
    margin-right: 5px;
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
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
    box-shadow: ${({ success, theme }) =>
      success && theme === 'light'
        ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
        : ' 0 1px 3px rgba(40, 167, 69, 1), 0 1px 2px rgba(40, 167, 69, 1);'};

    box-shadow: ${({ danger, theme }) =>
      danger && theme === 'light'
        ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
        : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
        : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};

    box-shadow: ${({ light }) => light && 'none'};
  }
`;

//NavToggler
export const Navtoggle = styled.div`
  width: 100%;
  padding: 8px 0;
  &:hover {
    background-color: ${({ theme }) =>
      theme === 'dark' ? '#363537' : '#e4e4e4'};

    .fal {
      color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    }
  }
  /* Disable on This  range */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

//Navlink Box
export const Linkbox = styled.div`
  width: 100%;
  margin-top: 30vh;

  .navlink {
    width: ${({ open }) => (open ? '150px' : '40px')};
    padding: 8px 0;
    transition: all 0.2s linear;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: ${({ theme }) => (theme === 'light' ? '#E4E4E4' : '#363537')};
    text-decoration: none;

    .fal {
      margin-right: 15px;
    }

    &:hover {
      color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
      background-color: ${({ theme }) =>
        theme === 'dark' ? '#363537' : '#e4e4e4'};

      .fal {
        color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: auto;
    display: flex;
    align-content: center;
    margin-top: 0;
    margin-left: auto;
    height: 44px;
    overflow: hidden;

    .navlink {
      width: auto;
      padding-right: 8px;

      .fal {
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 44px;
    .navlink {
      padding-left: 8px;
      .fal {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .side-auth {
      display: none;
    }
  }
`;

export const AlertBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px;
  margin: 5px 0 0;
  font-size: 14px;
  overflow: hidden;
  width: 300px;
  text-transform: capitalize;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  border: ${({ theme }) =>
    theme === 'dark' ? '1px solid #E4E4E4' : '1px solid #363537'};
  background-color: ${({ theme }) =>
    theme === 'dark' ? '#363537' : '#e4e4e4'};

  .fal {
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  }

  .alert-icon {
    width: 10px;
    margin: 0 10px;
  }

  &.success,
  &.danger {
    color: #e4e4e4;
    border: ${({ theme }) =>
      theme === 'light' ? '1px solid #E4E4E4' : '1px solid #363537'};

    .fal {
      color: #e4e4e4;
    }
  }

  &.success {
    background-color: #28a745;
  }

  &.danger {
    background-color: #dc3545;
  }

  /* } */
`;
