import linkedin from '../images/linkedin.png';
import telegram from '../images/telegram.png';
import skype from '../images/skype.png';
import email from '../images/mail.png';
import github from '../images/github.png';
import tel from '../images/tel.png';
import myPhoto from '../images/myPhoto.jpg';
import location from '../images/location.png';
import qrCode from '../images/qrCode.png';
import finger from '../images/finger.png';

export const stateEng = {
  about: {
    photo: myPhoto,
    profession: 'frontend-developer',
    name: 'Aliaksandr',
    surname: 'Shnipau'
  },
  contacts: {
    tel: {name: 'tel', img: tel, text: '+48 516 364 062', link: 'tel:+48516364062'},
    socials: [
      {name: 'linkedin', img: linkedin, link: 'https://linkedin.com/in/aliaksander-shnipau-717101204'},
      {name: 'telegram', img: telegram, link: 'https://t.me/S_Shnipov'},
      {name: 'skype', img: skype, link: 'https://join.skype.com/invite/Ohvpl9s9beq2'},
      {name: 'email', img: email, link: 'mailto:SShnipov@gmail.com'},
      {name: 'github', img: github, link: 'https://github.com/settings/profile'}
    ]
  },
  location:
    {
      city: 'Wroclaw',
      country: 'Poland',
      icon: location
    },
  summary: 'I am a result-oriented and enthusiastic web developer with experience in creating Single Page Applications (SPAs) using JavaScript (JS), React, TypeScript, Svelte, HTML, CSS, and WordPress. I am dedicated to learning new technologies and constantly improving my skills, particularly in Svelte and React. My goals include further improving my proficiency in JS, React, TypeScript, and Svelte. As a skilled Svelte developer, I have a strong understanding of its unique approach to web development, which is based on a compilation process that allows for highly efficient, fast-loading applications with a powerful reactive programming model and component system. I am also actively working on improving my English and Polish language skills, and I have found ChatGPT to be a great tool for speeding up my development process.',
  skills: ['English: B2', 'Polish: A2', 'HTML', 'CSS/SCSS', 'JS', 'React',  'Svelte', 'ReactHooks', 'TypeScript', 'GIT', 'Redux', 'Ajax', 'GraphQL', 'Material UI',
    'Bootstrap', 'BEM', 'PixelPerfect', 'Wordpress', 'Unit tests', 'Formik', 'ChatGPT'],
  portfolio: {
    link: 'https://alexandrshnipov.github.io/portfolio_react/',
    qrCode: qrCode,
    finger: finger
  },
  experience: {
    frontend: {
      position: 'Frontend-developer/Site layout',
      places: 'Freelance',
      dateTitle: 'date',
      date: '09/2021-present',
      work: [
        'HTML5, CSS,  BEM, SCSS/LESS, Greed',
        'JS, Svelte, REACT, TypeScript,, GraphQL', 'pixel perfect',
        'Bootstrap',
        'Email letters',
        'WordPress'
      ]
    },
    customs: {
      position: 'Customs officer',
      positionsArray: [
        {
          subPosition: 'Head of Department',
          places: 'Institute of the customs authorities, Minsk'
        },
        {
          subPosition: 'Inspector - Head of Risk Management Department',
          places: 'Vitebsk customs, Vitebsk'
        }
      ],
      dateTitle: 'date',
      date: '2004 – 2021',
      work: ['customs inspection',
        'databases analysis',
        'department management up to 30 people',
        'teamwork',
        'mentoring',
        'organization of the education process'
      ]
    }
  },
  education: [
    {
      places: 'Glo-Academy',
      position: 'WordPress developer course',
      site: 'https://glo.academy/',
      dateTitle: 'date',
      date: '2021-2022',
      skills: ['WordPress development']
    }, {
      places: 'IT-Incubator',
      position: 'HTML-Developer',
      site: 'https://it-incubator.io/',
      dateTitle: 'date',
      date: '2020-2021',
      skills: ['HTML', 'CSS, SCSS/LESS', 'Java Sсript', 'Bootstrap', 'WordPress', 'Git', 'React', 'Email Letters']
    }, {
      places: 'Vitebsk State Academy of Veterinary Medicine',
      position: 'veterinarian',
      dateTitle: 'date',
      date: '1993 – 1998'
    }
  ],
  summaryTitle: 'Summary',
  skillsTitle: 'Skills',
  experienceTitle: 'Experience',
  educationTitle: 'Education',
  linkOpenPortfolio:'open my portfolio'
};