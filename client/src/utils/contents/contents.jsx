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
      '   I am a Web Developer and I design mobile-friendly web applicationsusing Javascript as a core language. Besides programming I am passionate about the environment and its conservation.',
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
        icon: 'fab fa-react'
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
  }
};
