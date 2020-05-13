import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { setAlert } from '../../redux/actions/alert';
import Toast from '../toast/Toast';

const PrivateRoute = ({
  setAlert,
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  if (!isAuthenticated && !loading) {
    Toast({ msg: 'Not Authorized ', type: 'danger' });
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  route: PropTypes.array.isRequired,
  setAlert: PropTypes.func
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert })(PrivateRoute);
