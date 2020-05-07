import React, { lazy } from 'react';
import PrivateRoute from '../utils/routing/PrivateRoute';
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

export const authRoutes = [
  {
    path: '/auth/login',
    exact: true,
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/register',
    exact: true,
    name: 'Register',
    component: Register
  }
];

export const authPages = authRoutes.map((route, index) => {
  return route.component ? (
    <PrivateRoute
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  ) : null;
});
