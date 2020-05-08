import React from 'react';
import { bool, array } from 'prop-types';
import { Link } from 'react-router-dom';
import { Linkbox, Icon } from '../../Fixed/Styled';
import { connect } from 'react-redux';

const Navlinks = ({ theme, open, links }) => {
  return (
    <>
      <Linkbox theme={theme} open={open}>
        {links &&
          links.map((link) => (
            <Link className="navlink" to={link.path}>
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
  links: array.isRequired
};

const mapStateToProps = (state) => ({
  links: state.config.links
});

export default connect(mapStateToProps)(Navlinks);
