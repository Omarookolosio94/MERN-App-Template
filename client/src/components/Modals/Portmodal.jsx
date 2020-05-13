import React, { useState } from 'react';
import { Modal } from '../Fixed/Modal';
import { Card } from '../Fixed/Card';
import { Img } from '../../utils/default/img';
import { Icon, Button } from '../Fixed/Styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { array, bool, func } from 'prop-types';
import { logoutAccount } from '../../redux/actions/auth';

const Portmodal = ({
  open,
  close,
  theme,
  links,
  auth: { isAuthenticated, loading },
  logoutAccount
}) => {
  const img = theme && theme === 'dark' ? Img.potraitdark : Img.potraitlight;
  const logo = theme && theme === 'dark' ? Img.logodark : Img.logolight;

  return (
    <Modal open={open && open} theme={theme}>
      <Card theme={theme}>
        <div class="card-side card-back">
          <div className="card-close">
            <Button theme={theme} onClick={() => close()} light>
              <Icon>
                <i className="fal fa-times"></i>
              </Icon>
            </Button>
          </div>
          <div class="card-detail">
            <span className="title">Okolosio Oghenemaro</span>
            <img src={logo} alt="" />
            <p>
              I am a MERN developer. I build web application using Javascript.
            </p>
          </div>
          <div className="card-action">
            {isAuthenticated && !loading && (
              <Button theme={theme} onClick={logoutAccount} light>
                <Icon theme={theme}>
                  <i className="fal fa-sign-out-alt"></i>
                  <span className="text">Log Out</span>
                </Icon>
              </Button>
            )}
            {!isAuthenticated &&
              !loading &&
              links &&
              links
                .filter((link) => link.linkname === 'Manage Account')
                .map((link, index) => (
                  <Button key={index} theme={theme} light>
                    <Link
                      className="navlink"
                      to={link.path}
                      onClick={() => close()}
                    >
                      <Icon theme={theme}>
                        <i className={link.icon}></i>
                        <span className="text">{link.linkname}</span>
                      </Icon>
                    </Link>
                  </Button>
                ))}
          </div>
        </div>
        <div class="card-side card-front ">
          <div class="card-pic pic-front">
            <img src={img} alt="" />
          </div>
          <div class="card-text">I am Okolosio</div>
        </div>
      </Card>
    </Modal>
  );
};

Portmodal.propTypes = {
  open: bool.isRequired,
  links: array.isRequired,
  auth: array.isRequired,
  logoutAccount: func.isRequired
};

const mapStateToProps = (state) => ({
  links: state.config.links,
  auth: state.auth && state.auth
});

export default connect(mapStateToProps, { logoutAccount })(Portmodal);
