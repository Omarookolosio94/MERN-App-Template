import styled from 'styled-components';
import '../../App.scss';

export const Card = styled.div`
  perspective: 150rem;
  position: relative;
  height: 450px;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};

  .card-side {
    height: 400px;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .card-back {
    transform: rotateY(180deg);
  }

  .card-close {
    text-align: right;
  }

  .card-detail {
    margin: 1rem auto 10px;
    width: 90%;
    text-align: center;
    text-transform: capitalize;

    img {
      display: block;
      margin: 2rem auto;
      width: 80px;
      height: 80px;
    }

    .title {
      font-weight: 600;
    }
  }

  .card-action {
    margin: 1rem auto 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  &:hover .card-front {
    transform: rotateY(-180deg);
    transition-delay: 0.5s;
  }

  &:hover .card-back {
    transform: rotateY(0);
    transition-delay: 0.5s;
  }

  .card-pic img {
    position: absolute;
    top: 0;
    left: 0;
    height: 90%;
    width: 100%;
  }

  .card-text {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    height: 350px;

    .card-side {
      height: 350px;
    }

    .card-action {
      margin: 0.5rem auto 0;
    }

    .card-detail {
      margin: 0.5rem auto 10px;

      img {
        margin: 1rem auto;
        width: 60px;
        height: 60px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    height: 300px;

    .card-side {
      height: 300px;
    }
    .card-detail {
      img {
        display: none;
      }
    }
  }
`;
