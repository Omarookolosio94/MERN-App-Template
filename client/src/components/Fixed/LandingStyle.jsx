import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  text-transform: capitalize;
  line-height: 1.3;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.3rem;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  text-transform: capitalize;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  line-height: 0;
  margin-bottom: 1rem;
`;

export const PageWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const LandingWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin: 1rem auto;
  text-align: center;

  .land-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 90%;
    margin: 1rem 0;
  }

  .land-action p,
  .land-action h4 {
    transform: translateY(600px);
    animation: slideUp 0.8s ease forwards 0.5s;
  }

  .land-action button {
    transform: translateY(200px);
    animation: slideUp 0.8s ease-in-out forwards 1s;
  }

  .land-detail p {
    margin-bottom: 2rem;
  }

  /* Img styling */
  .pro-auth {
    width: 200px;
  }

  .text-bold {
    font-weight: bold;
  }

  .pro-img {
    width: 300px;
    margin: 0 0 0 15vw;
    height: 100%;
    overflow: hidden;
    animation: slideIn 1.5s ease-in-out forwards;

    img {
      width: 300px;
      height: 400px;
    }
  }

  @media only screen and (max-width: 768px) {
    .land-action {
      width: 50%;
      height: 90%;
    }

    .pro-img {
      width: 200px;
      height: 100%;

      img {
        width: 200px;
        height: 300px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;

    .land-action {
      width: 90%;
      height: 90%;
    }

    .pro-img {
      margin: 2rem 0 2rem 0;
      width: 200px;
      height: 250px;

      img {
        width: 150px;
        height: 250px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .pro-img {
      margin: 2rem 0 2rem 0;
    }
  }
  @media only screen and (max-width: 300px) {
    .pro-img {
      margin: 2rem 0 2rem 0;
    }
  }
`;
