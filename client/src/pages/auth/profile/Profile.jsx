import React from 'react';
import Skills from './Skills';
import Pages from './Pages';
import Projects from './Projects';
import Message from './Message';

const Profile = () => {
  return (
    <div>
      <p>Profile Landing Page. With display of Skills , Experience and Pages</p>
      <Skills />
      <Pages />
      <Projects />
      <Message />
    </div>
  );
};

export default Profile;
