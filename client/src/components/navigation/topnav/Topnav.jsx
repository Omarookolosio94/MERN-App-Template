import React, { useState, Fragment } from 'react';
import { bool, array, object } from 'prop-types';
import ThemeToggle from '../../Theme/ThemeToggle';
import { TopnavWrapper, Href, Icon, Button } from '../../Fixed/Styled';
import { connect } from 'react-redux';
import Portmodal from '../../Modals/Portmodal';
import { Img } from '../../../utils/default/img';
import { Link } from 'react-router-dom';

const Topnav = ({
  theme,
  links,
  open,
  authLinks,
  themeToggler,
  auth: { isAuthenticated, loading }
}) => {
  const [profileModal, openProfileModal] = useState(false);

  const img = theme && theme === 'dark' ? Img.logodark : Img.logolight;

  return (
    <Fragment>
      <div className="nav-box">
        <TopnavWrapper theme={theme} open={open}>
          <div className="social-link">
            {links &&
              links.map((link, index) => (
                <Href
                  key={index}
                  href={link.path}
                  theme={theme}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon theme={theme}>
                    <i className={link.icon}></i>
                  </Icon>
                  <span className="linkname">{link.name}</span>
                </Href>
              ))}
          </div>
          <div className="profile-link">
            <div className="auth-links">
              {isAuthenticated &&
                !loading &&
                authLinks &&
                authLinks
                  .filter((link) => link.linkname === 'Profile')
                  .map((link, index) => (
                    <Button theme={theme} light key={index}>
                      <Link className="navlink" to={link.path}>
                        <Icon theme={theme}>
                          <i className={link.icon}></i>
                          <span className="text-normal">{link.linkname}</span>
                        </Icon>
                      </Link>
                    </Button>
                  ))}
            </div>
            <ThemeToggle theme={theme} toggleTheme={themeToggler} />
            <div className="profilebtn" onClick={() => openProfileModal(true)}>
              <img src={img} alt="" />
            </div>
          </div>
        </TopnavWrapper>
        <Portmodal
          open={profileModal}
          close={() => openProfileModal(false)}
          theme={theme}
        />
      </div>
    </Fragment>
  );
};

Topnav.propTypes = {
  open: bool.isRequired,
  links: array.isRequired,
  authLinks: array.isRequired,
  auth: object.isRequired
};

const mapStateToProps = (state) => ({
  links: state.config.socials,
  authLinks: state.config.authLinks,
  auth: state.auth && state.auth
});

export default connect(mapStateToProps)(Topnav);
