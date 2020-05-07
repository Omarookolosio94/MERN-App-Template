import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { pages } from '../../routes/Routes';
import Navbar from '../../components/navbar/Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '../../components/Fixed/Styled';

const Index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback="Loading...">
          <Switch>{pages}</Switch>
        </Suspense>
      </Container>
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
