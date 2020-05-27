import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { pages } from '../../routes/Routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from '../../components/Spinner/Spinner';

const Index = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
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
