import React from 'react';
import {
  FormCard,
  Form,
  BackgroundImg
} from '../../components/Fixed/Login/LoginStyled';
import { Button, Icon } from '../../components/Fixed/Styled';

const Login = () => {
  const theme = window.localStorage.getItem('theme');
  return (
    <BackgroundImg theme={theme}>
      <FormCard theme={theme}>
        <Form theme={theme}>
          <p>Login</p>

          <div class="form-field">
            <div class="form-field__control">
              <input
                id="name"
                type="text"
                class="form-field__input"
                value=""
                placeholder=" "
                autocomplete="off"
              />
              <label for="name" class="form-field__label">
                Name
              </label>
              <div class="form-field__bar"></div>
            </div>
          </div>

          <div class="form-field">
            <div class="form-field__control">
              <input
                id="email"
                type="email"
                class="form-field__input"
                value=""
                placeholder=" "
                autocomplete="off"
              />
              <label for="email" class="form-field__label">
                Email
              </label>
              <div class="form-field__bar"></div>
            </div>
          </div>

          <div class="form-field">
            <div class="form-field__control">
              <textarea class="form-field__textarea" placeholder=" "></textarea>
              <label for="message" class="form-field__label">
                Message
              </label>
              <div class="form-field__bar"></div>
            </div>
          </div>
          <Button theme={theme}>
            <Icon theme={theme}>
              <i className="fal fa-key"></i>
              <span className="text">Login</span>
            </Icon>
          </Button>
        </Form>
      </FormCard>
    </BackgroundImg>
  );
};

export default Login;
