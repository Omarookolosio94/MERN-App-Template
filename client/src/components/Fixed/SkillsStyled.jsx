import styled from 'styled-components';

export const SKillsWrapper = styled.div`
  border: 1px solid red;
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  display: flex;
  align-items: center;
  height: auto;
  margin: 1rem auto;
  text-align: center;

  /* @media only screen and (max-width: 768px) {
   
  } */
`;

export const ContentBox = styled.div`
  border: 1px solid blue;
`;

export const SkillBox = styled.div`
  border: 1px solid red;
`;
