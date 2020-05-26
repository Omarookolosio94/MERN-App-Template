import React, { useState } from 'react';
import {
  FormCard,
  Form,
  FormHeader
} from '../../components/Fixed/Login/LoginStyled';
import { Button, Icon } from '../../components/Fixed/Styled';
import { loginAccount } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Login = ({ loginAccount, isAuthenticated, loading }) => {
  const theme = window.localStorage.getItem('theme');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const submit = (e) => {
    e.preventDefault();
    loginAccount(formData.email, formData.password);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <FormCard theme={theme}>
      <Form theme={theme} onSubmit={submit}>
        <FormHeader>
          <i className="fal fa-lock"></i>
          Login
        </FormHeader>

        <div className="form-field">
          <div className="form-control">
            <input
              type="email"
              className="form-input"
              name="email"
              value={formData.email}
              autoComplete="off"
              onChange={onChange}
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
        </div>

        <div className="form-field">
          <div className="form-control">
            <input
              type="password"
              className="form-input"
              name="password"
              value={formData.password}
              autoComplete="off"
              onChange={onChange}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
        </div>

        <Button theme={theme}>
          {/* <Icon theme={theme}>
            <i className="fal fa-key"></i>
            <span className="text">Login</span>
          </Icon> */}
          <Icon theme={theme}>
            <i
              className={
                loading ? 'fal fa-spinner-third fa-spin' : 'fal fa-key'
              }
            ></i>
            <span className="text">{loading ? 'Logging...' : 'Login'}</span>
          </Icon>
        </Button>
      </Form>
    </FormCard>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginAccount: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth && state.auth.loading
});

export default connect(mapStateToProps, { loginAccount })(Login);
