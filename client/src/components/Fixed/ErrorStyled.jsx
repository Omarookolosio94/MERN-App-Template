import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 80vh;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 763px) {
    width: 100%;
  }
`;

export const ErrorMsg = styled.div`
  text-align: center;

  h1 {
    font-size: 100px;
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  }
`;
