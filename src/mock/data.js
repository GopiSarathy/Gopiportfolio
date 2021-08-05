/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Gopinath',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Gopinath, and I am from Chennai.I completed my B.tech IT  from Valliammai Engineering College affiliated to Anna University, with an aggregate of 70%.',
  paragraphTwo: 'My goal is to build a successful career as a Software Developer, which can help the company and me personally. My strength is that I can adapt quickly to any environment and iam a very positive attitude and  punctuality persons. ',
  paragraphThree: 'This is all about me. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Inventory Management For SuperMarket',
    info: 'The basis of inventory control is keeping a record of stock that comes into the store and stock that leaves the store. However, the process is a little more complicated than this. Inventory that is kept in the supermarket warehouse, on the floor and in other areas of the store needs to be taken into account. Over and above sales, goods that are damaged, broken or used for display or other reasons also need to be accounted for. And then there is the issue of returns that also needs to be managed. Software packages, as well as bar coding, has made all of these issues much simpler to control.',
    info2: 'New stock that arrives in the stockroom is simply loaded onto a computer according to its bar code. When inventory leaves the stockroom, the information is entered into the computer.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Web Application for a Fitness Organization',
    info: 'This Fitness Website for Trainers enables the fitness trainer to design and set up daily exercise and meal plans based on the health parameters of each trainee registered with him/her. Exercise routines are setup using videos, step-wise instructions, highlighted body part images, etc. ',
    info2: 'The website enables body part highlighting using SVG rendering. The trainer can thus indicate the parts of the body that the particular exercise should affect.  This along with meal plans form the daily regime set up by the trainer for each trainee. It is received and processed by the trainee on his/her mobile app.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mpgopi1999@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/?lang=en',
    },
    {
      id: nanoid(),
      // eslint-disable-next-line prettier/prettier
      name: 'codepen',
      url: 'https://www.hackerrank.com/mpgopi1999',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gopinath-m-p-390943182/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GopiSarathy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
