import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Landing = lazy(() => import('../pages/public/Landing'));
const Skills = lazy(() => import('../pages/public/Skills'));
const Projects = lazy(() => import('../pages/public/Projects'));
const Contact = lazy(() => import('../pages/public/Contact'));
const Login = lazy(() => import('../pages/public/Login'));
const Register = lazy(() => import('../pages/public/Register'));

const Error = lazy(() => import('../pages/public/Error'));

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Landing',
    component: Landing
  },
  {
    path: '/okolosio/skills',
    exact: true,
    name: 'Skills',
    component: Skills
  },
  {
    path: '/okolosio/projects',
    exact: true,
    name: 'Projects',
    component: Projects
  },
  {
    path: '/okolosio/contact',
    exact: true,
    name: 'Contact',
    component: Contact
  },
  {
    path: '/okolosio/manageportfolio',
    exact: true,
    name: 'Login',
    component: Login
  },
  {
    path: '/okolosio/createportfolioprofile',
    exact: true,
    name: 'Register',
    component: Register
  },
  {
    name: 'Error',
    component: Error
  }
];

export const pages = publicRoutes.map((route, index) => {
  return route.component ? (
    <Route
      key={index}
      path={route.path && route.path}
      exact={route.exact && route.exact}
      name={route.name}
      render={(props) => {
        return <route.component {...props} {...route.rest} />;
      }}
    />
  ) : null;
});
