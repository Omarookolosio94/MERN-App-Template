import styled from 'styled-components';
import '../../App.scss';

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

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  height: 100vh;
  top: 0;
  left: 0;
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
  width: 100%;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};

  @media only screen and (max-width: 768px) {
    /* position: absolute; */
    margin-top: 44px;
  }
`;

export const TopnavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ theme }) =>
    theme === 'light' ? '1px solid #bcbabe' : '1px solid #bcbabe'};

  .social-link {
    width: 60%;
    padding: 8px 0;
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
  text-decoration: none;
  margin-right: 6px;
  text-transform: capitalize;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};

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

export const Icon = styled.button`
  /* width: 100%; */
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => (theme === 'light' ? '#E4E4E4' : '#363537')};

  .fal {
    font-size: 1rem;
    padding: 5px;
    color: ${({ theme }) => (theme === 'light' ? '#E4E4E4' : '#363537')};
  }

  .text {
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    font-size: 10px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: ${({ theme }) =>
    theme === 'dark' ? '1px solid #E4E4E4' : '1px solid #363537'};
  border: ${({ light }) => light && 'none'};
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  padding: 6px 6px;
  font-size: 14px !important;
  text-transform: capitalize;
  margin-right: 5px;
  outline: none;
  cursor: pointer;
  transition-duration: 0.4s;

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
      margin-right: 4px;
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
      .fal {
        display: none;
      }
    }
  }
`;
