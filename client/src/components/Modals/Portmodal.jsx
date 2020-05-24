import React, { useRef } from 'react';
import { Modal } from '../Fixed/Modal';
import { Card } from '../Fixed/Card';
import { Img } from '../../utils/default/img';
import { Icon, Button } from '../Fixed/Styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { array, bool, func, object } from 'prop-types';
import { logoutAccount } from '../../redux/actions/auth';
import { useOnClickOutside } from '../../hooks';

const Portmodal = ({
  open,
  close,
  theme,
  links,
  auth: { isAuthenticated, loading },
  logoutAccount
}) => {
  const node = useRef();
  useOnClickOutside(node, () => close());

  const img = theme && theme === 'dark' ? Img.potraitdark : Img.potraitlight;
  const logo = theme && theme === 'dark' ? Img.logodark : Img.logolight;

  return (
    <Modal open={open && open} theme={theme} ref={node}>
      <Card theme={theme}>
        <div className="card-side card-back">
          <div className="card-close">
            <Button theme={theme} onClick={() => close()} light>
              <Icon>
                <i className="fal fa-times"></i>
              </Icon>
            </Button>
          </div>
          <div className="card-detail">
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
        <div className="card-side card-front ">
          <div className="card-pic pic-front">
            <img src={img} alt="" />
          </div>
          <div className="card-text">I am Okolosio</div>
        </div>
      </Card>
    </Modal>
  );
};

Portmodal.propTypes = {
  open: bool.isRequired,
  links: array.isRequired,
  auth: object.isRequired,
  logoutAccount: func.isRequired
};

const mapStateToProps = (state) => ({
  links: state.config.links,
  auth: state.auth && state.auth
});

export default connect(mapStateToProps, { logoutAccount })(Portmodal);
