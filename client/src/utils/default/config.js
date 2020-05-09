export default {
  basename: '/okolosio',
  defaultPath: '/okolosio',
  authLinks: [
    {
      linkname: 'Profile',
      icon: 'fal fa-user',
      path: '/auth/profile',
      public: false
    },
    {
      linkname: 'Projects',
      icon: 'fal fa-certificate',
      path: '/auth/projects',
      public: false
    },
    {
      linkname: 'Messages',
      icon: 'fal fa-comments',
      path: '/auth/messages',
      public: false
    }
  ],
  links: [
    {
      linkname: 'Home',
      icon: 'fal fa-home',
      path: '/',
      public: true
    },
    {
      linkname: 'Skills',
      icon: 'fal fa-tools',
      path: '/okolosio/skills',
      public: true
    },
    {
      linkname: 'Projects',
      icon: 'fal fa-tasks',
      path: '/okolosio/projects',
      public: true
    },
    {
      linkname: 'Contact',
      icon: 'fal fa-phone',
      path: '/okolosio/contact',
      public: true
    },
    {
      linkname: 'Register',
      icon: 'fal fa-user-plus',
      path: '/okolosio/createportfolioprofile',
      public: false
    },
    {
      linkname: 'Manage Account',
      icon: 'fal fa-lock',
      path: '/okolosio/manageportfolio',
      public: false
    }
  ],
  socials: [
    {
      path: 'mailto: omarookolosio94@gmail.com',
      icon: 'fal fa-envelope',
      name: 'mail'
    },
    {
      path: 'https://instagram.com/okolosio_oghenemaro',
      icon: 'fab fa-instagram',
      name: 'instagram'
    },
    {
      path: 'https://www.linkedin.com/in/oghenemaro-okolosio-24653512a',
      icon: 'fab fa-linkedin',
      name: 'linkedin'
    },
    {
      path: 'https://github.com/omarookolosio94',
      icon: 'fab fa-github',
      name: 'github'
    }
  ]
};
