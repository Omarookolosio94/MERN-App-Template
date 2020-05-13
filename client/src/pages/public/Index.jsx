import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { pages } from '../../routes/Routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Index = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <Switch>{pages}</Switch>
      </Suspense>
    </>
  );
};

Index.propTypes = {
  config: PropTypes.object
};

const mapStateToProps = (state) => ({
  config: state.config
});

export default connect(mapStateToProps)(Index);
