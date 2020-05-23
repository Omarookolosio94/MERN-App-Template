import React, { useState, useEffect } from 'react';
import {
  FormCard,
  Form,
  FormHeader,
  BackgroundImg
} from '../../components/Fixed/Login/LoginStyled';
import { Button, Icon } from '../../components/Fixed/Styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessage } from '../../redux/actions/message';
import { PageTitle, Paragraph } from '../../components/Fixed/LandingStyle';
import {
  ContactWrapper,
  ContactCard,
  ContactContent,
  ContactBox
} from '../../components/Fixed/ContactStyle';
import contents from '../../utils/contents/contents';

const Contact = ({ sendMessage, message: { loading, success } }) => {
  const theme = window.localStorage.getItem('theme');

  const { title, para1, para2, action, icon, alt, phoneNo } = contents.contact;

  const initialState = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState({
    ...initialState
  });

  useEffect(() => {
    success && setFormData(initialState);
  }, [success]);

  const submit = (e) => {
    e.preventDefault();
    sendMessage(formData);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactWrapper theme={theme}>
      <ContactContent theme={theme}>
        <PageTitle theme={theme}>Contact</PageTitle>
        <ContactBox>
          <Paragraph theme={theme}>{para1}</Paragraph>
          <Paragraph theme={theme}>
            {para2}{' '}
            <a href={phoneNo}>
              <Icon theme={theme} className={icon}></Icon> {action}
            </a>
          </Paragraph>
        </ContactBox>
      </ContactContent>
      <ContactCard theme={theme}>
        <Form theme={theme} onSubmit={submit}>
          <FormHeader>Contact</FormHeader>

          <div className="form-field">
            <div className="form-control">
              <input
                type="text"
                className="form-input"
                name="name"
                value={formData.name}
                autoComplete="off"
                onChange={onChange}
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>
          </div>

          <div className="form-field">
            <div className="form-control">
              <input
                type="email"
                className="form-input"
                name="email"
                value={formData.email}
                autoComplete="off"
                onChange={onChange}
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
          </div>
          <div class="form-field">
            <div class="form-control">
              <textarea
                class="form-textarea"
                name="message"
                value={formData.message}
                onChange={onChange}
              ></textarea>
              <label for="message" class="form-label">
                Message
              </label>
            </div>
          </div>

          <Button theme={theme}>
            <Icon theme={theme}>
              <i
                className={
                  loading
                    ? 'fal fa-spinner-third fa-spin'
                    : 'fal fa-paper-plane'
                }
              ></i>
              <span className="text">{loading ? 'Sending...' : 'Send'}</span>
            </Icon>
          </Button>
        </Form>
      </ContactCard>
    </ContactWrapper>
  );
};

Contact.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired
};

const mapStateToProps = ({ message }) => ({
  message: message && message
});

export default connect(mapStateToProps, { sendMessage })(Contact);
