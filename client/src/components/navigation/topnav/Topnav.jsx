import React, { useState } from 'react';
import { bool, array } from 'prop-types';
import ThemeToggle from '../../Theme/ThemeToggle';
import { TopnavWrapper, Href, Icon, Button } from '../../Fixed/Styled';
import { connect } from 'react-redux';
import Portmodal from '../../Modals/Portmodal';
import { Img } from '../../../utils/default/img';
import { Link } from 'react-router-dom';

const Topnav = ({ theme, links, authLinks, themeToggler }) => {
  const [profileModal, openProfileModal] = useState(false);

  const img = theme && theme === 'dark' ? Img.logodark : Img.logolight;

  return (
    <>
      <TopnavWrapper theme={theme}>
        <div className="social-link">
          {links &&
            links.map((link) => (
              <Href
                href={link.path}
                theme={theme}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <i class={link.icon}></i>
                </Icon>
                <span className="linkname">{link.name}</span>
              </Href>
            ))}
        </div>
        <div className="profile-link">
          <div className="auth-links">
            {authLinks &&
              authLinks
                .filter((link) => link.linkname === 'Profile')
                .map((link) => (
                  <Button theme={theme} light>
                    <Link className="navlink" to={link.path}>
                      <Icon theme={theme}>
                        <i className={link.icon}></i>
                        <span className="text">{link.linkname}</span>
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
    </>
  );
};

Topnav.propTypes = {
  open: bool.isRequired,
  links: array.isRequired,
  authLinks: array.isRequired
};

const mapStateToProps = (state) => ({
  links: state.config.socials,
  authLinks: state.config.authLinks
});

export default connect(mapStateToProps)(Topnav);
