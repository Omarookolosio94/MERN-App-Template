import styled from 'styled-components';
import { Img } from '../../../utils/default/img';

export const FormCard = styled.div`
  height: auto;
  width: 300px;
  margin: 1rem auto 1rem 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#E4E4E4' : '#363537'};
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
      : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};

  @media only screen and (max-width: 763px) {
    margin: 1rem auto 1rem 40%;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    margin: 2rem auto;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    margin: 2rem auto;
  }
`;

export const BackgroundImg = styled.div`
  height: 100%;
  background: ${({ theme }) =>
    theme === 'light'
      ? `url(${Img.landscapelight}) no-repeat;`
      : `url(${Img.landscapedark} ) no-repeat;`};
  background-size: cover;
`;

export const Form = styled.form`
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  margin: 10px 0;
  width: 90%;
  margin: 0 auto 1rem;
  padding: 10px 0;

  .form-field {
    display: block;
    padding: 6px 0;
    margin-bottom: 16px;
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
        : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};
  }

  .form-check {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    label {
      margin-right: 10px;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    -webkit-text-fill-color: ${({ theme }) =>
      theme === 'dark' ? '#E4E4E4' : '#363537'};
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? '0 0 0px 1000px #E4E4E4 inset'
        : '0 0 0px 1000px #363537 inset'};
    -webkit-box-shadow: ${({ theme }) =>
      theme === 'light'
        ? '0 0 0px 1000px #E4E4E4 inset'
        : '0 0 0px 1000px #363537 inset'};
    transition: background-color 5000s ease-in-out 0s;
  }

  .form-label {
    font-size: 12px;
    font-weight: bold;
    transform: translateY(-14px);
    display: block;
    left: 0;
    margin: 0;
    padding: 18px 12px 0;
    position: absolute;
    top: 0;
    transition: all 0.4s;
    width: 100%;
  }

  .form-control {
    border: none;
    background-color: transparent;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  input.form-input,
  select.form-input,
  textarea.form-textarea {
    font-family: inherit;
    appearance: none;
    background: ${({ theme }) => (theme === 'light' ? '#E4E4E4' : '#363537')};
    border: none;
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    display: block;
    font-size: 14px;
    margin-top: 24px;
    outline: 0;
    padding: 0 12px 5px 12px;
    width: 100%;
  }

  input.form-input:-ms-input-placeholder ~ .form-label,
  select.form-input:-ms-input-placeholder ~ .form-label,
  textarea.form-textarea:-ms-input-placeholder ~ .form-label {
    font-size: 14px;
    transform: translateY(0);
  }

  input.form-input:placeholder-shown ~ .form-label,
  select.form-input:placeholder-shown ~ .form-label,
  textarea.form-textarea:placeholder-shown ~ .form-label {
    font-size: 14px;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  input.form-input:focus ~ .form-label,
  select.form-input:focus ~ .form-label,
  textarea.form-textarea:focus ~ .form-label {
    font-size: 12px;
    -webkit-transform: translateY(-14px);
    transform: translateY(-14px);
  }

  .form-textarea {
    height: 100px;
  }
`;

export const FormHeader = styled.div`
  text-align: center;
  margin: 1rem 0 2rem;

  .fal {
    margin-right: 5px;
  }
`;
