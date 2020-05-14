import React, { lazy } from 'react';
import PrivateRoute from '../utils/routing/PrivateRoute';
const Profiles = lazy(() => import('../pages/auth/profile/Profile'));
const Projects = lazy(() => import('../pages/auth/projects/Project'));
const Messages = lazy(() => import('../pages/auth/messages/Messages'));

export const authRoutes = [
  {
    path: '/auth/profile',
    exact: true,
    name: 'Profile',
    component: Profiles
  },
  {
    path: '/auth/projects',
    exact: true,
    name: 'Projects',
    component: Projects
  },
  {
    path: '/auth/messages',
    exact: true,
    name: 'Messages',
    component: Messages
  }
];

export const authPages = authRoutes.map((route, index) => {
  return route.component ? (
    <PrivateRoute
      key={index}
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  ) : null;
});
