import React from 'react';
import { bool, array } from 'prop-types';
import { Link } from 'react-router-dom';
import { Linkbox, Icon } from '../../Fixed/Styled';
import { connect } from 'react-redux';

const Navlinks = ({ theme, open, links, authLinks }) => {
  return (
    <>
      <Linkbox theme={theme} open={open}>
        {links &&
          links
            .filter((link) => link.public === true)
            .map((link) => (
              <Link className="navlink" to={link.path}>
                <Icon theme={theme}>
                  <i className={link.icon}></i>
                </Icon>
                <span className="linkname">{link.linkname}</span>
              </Link>
            ))}
        {/* {authLinks &&
          authLinks
            .filter((link) => link.public === false)
            .map((link) => (
              <Link className="navlink" to={link.path}>
                <Icon theme={theme}>
                  <i className={link.icon}></i>
                </Icon>
                <span className="linkname">{link.linkname}</span>
              </Link>
            ))} */}
      </Linkbox>
    </>
  );
};

Navlinks.propTypes = {
  open: bool.isRequired,
  links: array.isRequired,
  authLinks: array.isRequired
};

const mapStateToProps = (state) => ({
  links: state.config.links,
  authLinks: state.config.authLinks
});

export default connect(mapStateToProps)(Navlinks);
