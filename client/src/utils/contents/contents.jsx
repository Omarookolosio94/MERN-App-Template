import { Img } from '../default/img';
import Contact from '../../pages/public/Contact';

export default {
  home: {
    title: 'Home',
    access: 'Public',
    para1: ' Hi, I am',
    para2: 'and have got good news for you',
    para3: 'Building Your Web application just got easier',
    para4:
      '   I am a Web Developer and I design mobile-friendly web applications using Javascript as a core language. Besides programming I am passionate about the environment and its conservation.',
    buttonName: 'Start Building',
    imgLight: Img.potraitlight,
    imgDark: Img.potraitdark,
    portName: 'Okolosio'
  },

  contact: {
    title: 'Contact',
    para1:
      'I am interested in freelance opportunities. Need to build a website for a voluntary organisation or Social awareness campaign (related to but not limited to Child Mortality, Modern Day Slavery, Gender Equality, Green Movements and so on), I will build for a third the actual price.',
    para2: `Any other questions or request, don't hesitate to contact me on social media or give me a call`,
    action: '+234 Call Me',
    icon: 'fal fa-phone',
    alt: 'Okolosio',
    phoneNo: 'tel:+2347019069486'
  },

  skills: {
    title: 'Skills and Experience',
    para1:
      'I am a MERN Developer, with expert knowledge in Express , Node , React and No_SQL Database management. With knowlege of the command terminal,I seamlessly integrate Git into any project.',
    currentPosition: {
      positon: 'I currently work as a Software Developer at',
      company: 'Itap Solutions',
      location: 'Ikeja , Lagos Nigeria.',
      companyLink: 'http://www.itapsolutions.net/',
      action: 'to Build Your Web Apllication',
      link: 'Contact Me',
      linkTo: '/okolosio/contact'
    },
    skill: [
      {
        name: 'HTML',
        detail: 'HTML for UI/UX',
        rating: 5,
        expLength: 2,
        icon: 'fab fa-html5'
      },
      {
        name: 'CSS',
        detail: 'CSS for UI/UX',
        rating: 5,
        expLength: 2,
        icon: 'fab fa-css3'
      },
      {
        name: 'Javascript',
        detail: 'Vanilla JS , JSX for React',
        rating: 4,
        expLength: 2,
        icon: 'fab fa-js'
      },
      {
        name: 'Node',
        detail: 'Node JS & Express for Backend',
        rating: 4,
        expLength: 2,
        icon: 'fab fa-node'
      },
      {
        name: 'MongoDB',
        detail: 'Non Relational Database Management',
        rating: 4,
        expLength: 2,
        icon: 'fab fa-mdb'
      },
      {
        name: 'React',
        detail: 'Front End Framework',
        rating: 4,
        expLength: 1,
        icon: 'fab fa-react'
      },
      {
        name: 'Git',
        detail: 'Git for Project Management',
        rating: 3.5,
        expLength: 2,
        icon: 'fab fa-git'
      },
      {
        name: 'SASS',
        detail: 'CSS Framework for UI design',
        rating: 3.5,
        expLength: 2,
        icon: 'fab fa-sass'
      },
      {
        name: 'Bootstrap',
        detail: 'Bootstrap Framework for UI design',
        rating: 5,
        expLength: 2,
        icon: 'fab fa-bootstrap'
      }
    ]
  },
  projects: {
    title: 'Projects',
    project: [
      {
        name: 'Airview',
        summary: 'MERN Application',
        tech: ['MonogDB', 'React', 'Express', 'NodeJS'],
        link: 'https://bit.ly/3bQW4fe',
        description:
          ' Airview is a web service dedicated to delivering efficient and fast publication of written works. It is a MERN application that gives users access to create profiles write articles as well as add comments. It also gives users access to update existing profiles or written articles.',
        features: [
          'CMS Application',
          'Mobile Friendly',
          'CRUD Functionality',
          'Authentication'
        ]
      },
      {
        name: 'Blogspot',
        summary: 'Node Express application',
        link: 'https://blospot.herokuapp.com/',
        description:
          'Blospot is a blog application. Built using NODE and Express, Responsive design with CRUD functionality.',
        tech: ['Node', 'Express', 'MongoDB', 'EJS'],
        features: ['CMS Application', 'CRUD Functionality', 'Responsive']
      },
      {
        name: 'Ariere',
        summary: 'Web Interface',
        link: 'https://bit.ly/38F5NDB',
        description:
          'Website template for a publication company. Responsive, mobile-friendly DRY design. Built using Basic Language; HTML, SASS and Vanilla JS.',
        tech: ['HTML', 'CSS', 'Javascript'],
        features: ['Mobile Friendly', 'Responsive']
      },
      {
        name: 'Dapskic Construction',
        summary: 'Website Template',
        link: 'https://bit.ly/2SxCYTF',
        description:
          ' Website template for a construction company. Built entirely using HTML and JS. Responsive, mobile-friendly , Single page design.',
        tech: ['HTML', 'CSS', 'Javascript'],
        features: ['Mobile Friendly', 'Responsive', 'Single Page']
      }
    ]
  }
};
