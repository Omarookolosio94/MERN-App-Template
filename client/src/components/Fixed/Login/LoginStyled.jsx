import styled from 'styled-components';
import { Img } from '../../../utils/default/img';

export const FormCard = styled.div`
  height: auto;
  width: 250px;
  margin: 1rem auto 1rem 60%;
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
    width: 60%;
    margin: 2rem auto;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
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
  margin: 0 auto;
  padding: 10px 0;

  .form-field {
    display: block;
    margin-bottom: 16px;
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
        : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};
  }

  .form-field__label {
    font-size: 12px;
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

  .form-field__control {
    border: none;
    background-color: transparent;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .form-field__bar {
    display: block;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    transform: scaleX(0);
    transition: all 0.4s;
    width: 1%;
  }

  input.form-field__input,
  textarea.form-field__textarea {
    appearance: none;
    background: ${({ theme }) => (theme === 'light' ? '#E4E4E4' : '#363537')};
    border: none;
    border-bottom: ${({ theme }) =>
      theme === 'light' ? '1px solid #E4E4E4' : '1px solid  #363537'};
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
    display: block;
    font-size: 14px;
    margin-top: 24px;
    outline: 0;
    padding: 0 12px 5px 12px;
    width: 100%;
  }

  input.form-field__input:-ms-input-placeholder ~ .form-field__label,
  textarea.form-field__textarea:-ms-input-placeholder ~ .form-field__label {
    font-size: 14px;
    transform: translateY(0);
  }

  input.form-field__input:placeholder-shown ~ .form-field__label,
  textarea.form-field__textarea:placeholder-shown ~ .form-field__label {
    font-size: 14px;
    transform: translateY(0);
  }

  input.form-field__input:focus ~ .form-field__label,
  textarea.form-field__textarea:focus ~ .form-field__label {
    color: var(--light-color);
    font-size: 12px;
    transform: translateY(-14px);
  }

  input.form-field__input:focus ~ .form-field__bar,
  textarea.form-field__textarea:focus ~ .form-field__bar {
    transform: scaleX(150);
  }

  .form-field__textarea {
    height: 100px;
  }
`;
