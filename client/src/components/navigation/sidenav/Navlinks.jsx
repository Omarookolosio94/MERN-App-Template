import React from 'react';
import { bool, array, object } from 'prop-types';
import { Link } from 'react-router-dom';
import { Linkbox, Icon } from '../../Fixed/Styled';
import { connect } from 'react-redux';

const Navlinks = ({
  theme,
  open,
  links,
  authLinks,
  auth: { isAuthenticated, loading }
}) => {
  return (
    <>
      <Linkbox theme={theme} open={open}>
        {links &&
          links
            .filter((link) => link.public === true)
            .map((link, index) => (
              <Link className="navlink" to={link.path} key={index}>
                <Icon theme={theme}>
                  <i className={link.icon}></i>
                </Icon>
                <span className="linkname">{link.linkname}</span>
              </Link>
            ))}
        {isAuthenticated &&
          !loading &&
          authLinks &&
          authLinks
            .filter((link) => link.linkname !== 'Profile')
            .map((link, index) => (
              <Link className="navlink side-auth" to={link.path} key={index}>
                <Icon theme={theme}>
                  <i className={link.icon}></i>
                </Icon>
                <span className="linkname">{link.linkname}</span>
              </Link>
            ))}
      </Linkbox>
    </>
  );
};

Navlinks.propTypes = {
  open: bool.isRequired,
  links: array.isRequired,
  authLinks: array.isRequired,
  auth: object.isRequired
};

const mapStateToProps = (state) => ({
  links: state.config.links,
  authLinks: state.config.authLinks,
  auth: state.auth
});

export default connect(mapStateToProps)(Navlinks);
