import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  text-transform: capitalize;
  line-height: 1.3;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PageWrapper = styled.div`
  margin: 1rem 0;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LandingWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap-reverse;
  height: auto;
  margin: 0 auto;
  text-align: center;

  .land-action {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
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
    border: 1px solid red;
    width: 300px;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    animation: slideIn 1.5s ease-in-out forwards;

    img {
      width: 300px;
      height: 400px;
    }
  }

  @media only screen and (max-width: 768px) {
    .land-action {
      width: 60%;
      height: 90%;
    }

    .pro-img {
      width: 200px;
      height: 100%;

      img {
        width: 200px;
        height: 350px;
      }
    }
  }
`;
