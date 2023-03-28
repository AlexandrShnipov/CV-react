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

export const statePl = {
  about: {
    photo: myPhoto,
    profession: 'frontend-developer',
    name: 'Aliaksandr',
    surname: 'Shnipau'
  },
  contacts: {
    tel: {name: 'tel', img: tel, text: '+48 516 364 062', link: 'tel:+48516364062'},
    socials: [
      {name: 'linkedin', img: linkedin, link: 'https://www.linkedin.com/in/alexander-shnipov-717101204/'},
      {name: 'telegram', img: telegram, link: 'https://t.me/S_Shnipov'},
      {name: 'skype', img: skype, link: 'https://join.skype.com/invite/Ohvpl9s9beq2'},
      {name: 'email', img: email, link: 'sshnipov@gmail.com'},
      {name: 'github', img: github, link: 'https://github.com/settings/profile'}
    ]
  },
  location:
    {
      city: 'Wrocław',
      country: 'Polska',
      icon: location
    },
  summary: 'Jestem programistą webowym nastawionym na wyniki i entuzjastą, posiadającym doświadczenie w tworzeniu aplikacji jednostronicowych (SPA) z użyciem JavaScript (JS), React, TypeScript, Svelte, HTML, CSS i WordPress. Jestem zdeterminowany, aby uczyć się nowych technologii i nieustannie doskonalić swoje umiejętności, zwłaszcza w Svelte i React. Moje cele obejmują dalsze doskonalenie mojej biegłości w JS, React, TypeScript i Svelte. Jako wykwalifikowany programista Svelte, mam silne zrozumienie jego unikalnego podejścia do tworzenia stron internetowych, opartego na procesie kompilacji, który pozwala na wysoce wydajne, szybko ładowane aplikacje z potężnym modelem programowania reaktywnego i systemem komponentów. Aktywnie pracuję również nad poprawą swoich umiejętności językowych w językach angielskim i polskim, a ChatGPT uważam za świetne narzędzie do przyspieszenia procesu rozwoju.',
  skills: ['Angielski: B2', 'Polski: A2', 'HTML', 'CSS/SCSS', 'JS', 'Svelte', 'React', 'ReactHooks', 'TypeScript', 'GIT', 'Redux', 'Ajax', 'GraphQL', 'Material UI',
    'Bootstrap', 'BEM', 'PixelPerfect', 'Wordpress', 'Unit tests', 'Formik','ChatGPT'],
  portfolio: {
    link: 'https://alexandrshnipov.github.io/portfolio_react/',
    qrCode: qrCode,
    finger: finger
  },
  experience: {
    frontend: {
      position: 'Frontend-programista / układ strony',
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
      position: 'Celnik',
      positionsArray: [
        {
          subPosition: 'Szef działu',
          places: 'Instytut organów celnych, Mińsk'
        },
        {
          subPosition: 'Inspektor-Kierownik Działu Zarządzania Ryzykiem',
          places: 'Celnica w Witebsku, Witebsk'
        }
      ],
      dateTitle: 'date',
      date: '2004 – 2021',
      work: ['Kontrola celna',
        'Analiza baz danych',
        'Zarządzanie działem do 30 osób',
        'Praca zespołowa',
        'Mentorowanie',
        'Organizacja procesu edukacji'
      ]
    }
  },
  education: [
    {
      places: 'Glo-Academy',
      position: 'Kurs dla deweloperów WordPress',
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
      places: 'Witebska Państwowa Akademia Medycyny Weterynaryjnej',
      position: 'weterynarz',
      dateTitle: 'date',
      date: '1993 – 1998'
    }
  ],
  summaryTitle: 'Podsumowanie',
  skillsTitle: 'Umiejętności',
  experienceTitle: 'Doświadczenie',
  educationTitle: 'Edukacja',
  linkOpenPortfolio: 'otwórz moje portfolio'
};