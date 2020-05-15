import styled from 'styled-components';

export const SKillsWrapper = styled.div`
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: auto;
  margin: 1rem auto;

  /* @media only screen and (max-width: 768px) {
   
  } */
`;

export const ContentBox = styled.div`
  height: 90%;
  width: 40%;

  .details {
    margin: 20vh auto 1rem;
    width: 90%;
  }
`;

export const SkillBox = styled.div`
  width: 60%;
  display: inline-flex;
  flex-wrap: wrap;
`;

export const SKill = styled.div`
  padding: 1rem 0.5rem;
  height: 120px;
  width: 150px;
  text-align: center;
  transform: translateY(600px);
  animation: slideUp 0.7s ease-in-out forwards 0.7s;
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
      : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};

  .logo i {
    font-size: 2rem;
  }

  .detail i.full {
    color: gold;
    font-weight: bold;
  }
`;
