import calculator from './../../assets/calculator.jpg';
import clonewars from './../../assets/clonewars.jpg';
import covid from './../../assets/covid.jpg';
import english from './../../assets/english.jpg';
import puzzle from './../../assets/puzzle.jpg';
import virtualKbd from './../../assets/virtualKbd.jpg';
import shelter from './../../assets/shelter.jpg';
import presClone from './../../assets/presClone.jpg';
import presLoadash from './../../assets/presLoadash.jpg';
import crud from './../../assets/crud.jpg';
import momentum from './../../assets/momentum.jpg';
import webdev from './../../assets/webdev.jpg';
import react from './../../assets/react-logo.png';
import redux from './../../assets/redux-logo.png';
import express from './../../assets/express-logo.png';
import jquery from './../../assets/jquery-logo.png';
import node from './../../assets/node-logo.png';
import reveal from './../../assets/reveal-logo.svg';
import ts from './../../assets/ts-logo.jpg';
import leaflet from './../../assets/leaflet-logo.svg';
import spring from './../../assets/spring-logo.png';
import chart from './../../assets/chart-logo.svg';
import html from './../../assets/html-logo.png';
import js from './../../assets/js-logo.png';
import css from './../../assets/css-logo.png';
import mongo from './../../assets/mongo-logo.png';
import material from './../../assets/material-logo.png';

const dataList = {
  JS: [
    {
      id: 1-0,
      name: 'English for kids',
      description: 'Application for learning english words for kids with dubbing and rating table',
      descriptionFull: 'Application for learning english words for kids with dubbing and rating table. There are several categories of various topics, as well as the ability to repeat difficult words and record statistics in local storage.',
      date: '12.2020',
      stack: [js, css],
      ghLink: 'https://github.com/Senobiot/RSSchool-English-for-kids',
      deployLink: 'https://senobiot.github.io/RSSchool-English-for-kids/english/',
      additional: 'RSSchool task',
      bgColor: '#a9b6e0',
      logo: english,
    },
    {
      id: 1-1,
      name: 'Calculator',
      description: 'Application is a complete 12-digits accounting calculator',
      descriptionFull: 'Application is a complete 12-digits accounting calculator. The ability to display in non-exponential format, memory operations, operations with %, there is a "help" button about operations.',
      date: '09.2020',
      stack: [js, html, css],
      ghLink: '',
      deployLink: '',
      bgColor: '#d3c6a4',
      additional: 'RSSchool task',
      logo: calculator,
    },
    {
      id: 1-2,
      name: 'Momentum Widget',
      description: 'Widget with several things like weather, goal selection, etc...',
      descriptionFull: 'Widget with weather forecast for any city and quotes of the famous people :). There is ability for set you goal of the day. Widget stores your name and yout golas in local storage.',
      stack: [js, html, css],
      ghLink: '',
      deployLink: '',
      date: '10.2020',
      additional: 'RSSchool task',
      bgColor: '#d4b79a',
      logo: momentum,
      height: 200
    },
    {
      id: 1-3,
      name: 'Covid-19 Dashboard',
      description: 'Covid-19 Dashboard with statistic of any country and interactive map',
      descriptionFull: 'Covid-19 Dashboard with statistic of any country and interactive map with two different layers (light and dark). There you can see any statistic inticator (12 inticators) of any country / continent and display it on the graph and map.',
      stack: [js,leaflet, chart, css, ],
      bgColor: '#b1b9aa',
      date: '12.2020',
      ghLink: '',
      deployLink: '',
      additional: 'RSSchool command task',
      logo: covid,
      height: 200
    },
    {
      id: 1-4,
      name: 'Puzzle 15',
      description: 'Puzzle 15 game with many features and autocomplete function',
      descriptionFull: 'Puzzle 15 game with many features and autocomplete function. There is an possibility to choose the difficulty (from 3x3 to 8x8), enable/disable music or sound, change gem\'s back. Application has 3 slots for save/load your game in local storage and has a leaderboard.',
      stack: [js, css],
      bgColor: '#617889',
      date: '11.2020',
      ghLink: '',
      deployLink: '',
      additional: 'RSSchool task',
      logo: puzzle,
      height: 200
    },
    {
      id: 1-5,
      name: 'Virtual keyboard',
      description: 'Virtual keyboard with multilanguage support and speech recognition',
      descriptionFull: 'Virtual keyboard with multilanguage support and speech recognition function. It\'s has almost all common keyboard\'s fucntions',
      stack: [js, css],
      ghLink: '',
      deployLink: '',
      date: '10.2020',
      additional: 'RSSchool task',
      bgColor: '#1f4a5d',
      logo: virtualKbd,
      height: 200
    }

  ],
  React: [
    {
      id: 2-0,
      name: 'clonewars',
      description: 'clonewars',
      stack: [react, js, ts, redux, material, leaflet, chart, spring, css],
      ghLink: '',
      deployLink: '',
      bgColor: '#2092df',
      logo: clonewars,
    },
    {
      id: 2-1,
      name: 'REST API UI',
      description: 'This is REST API UI, with some features.',
      descriptionFull: 'This is REST API UI, with some features like ability to add and edit some custom fields and save to mongoDB.',
      stack: [node, express, mongo, react, redux, js, css],
      date: '03.2021',
      ghLink: 'https://github.com/Senobiot/CRUD-UI',
      deployLink: 'https://crud-ui-v2.netlify.app/',
      additional: 'Short Track task. WARNING: it\'s necessary to wait for about 20 sec while application starts (wait for \'heroku\' starts server)',
      bgColor: '#d7f2fb',
      logo: crud,
    }
  ],
  HTML: [
    {
      id: 3-0,
      name: 'shelter',
      description: 'It\'s a multiple pages site, with pagination and some js logic',
      descriptionFull: 'It\'s a multiple pages site, with pagination and some js logic',
      stack: [js, html, css],
      date: '10.2020',
      ghLink: 'https://github.com/Senobiot/RSSchool-Shelter',
      deployLink: 'https://senobiot.github.io/RSSchool-Shelter/shelter/pages/main/',
      additional: 'RSSchool task',
      bgColor: '#e5e5e5',
      logo: shelter,
    },
    {
      id: 3-1,
      name: 'webdev',
      description: 'It\'s a simple landing page',
      descriptionFull: 'It\'s a simple landing page',
      ghLink: 'https://github.com/Senobiot/RSSchool-WebDev',
      deployLink: 'https://senobiot-webdev.netlify.app/',
      stack: [html, css],
      date: '09.2020',
      additional: 'RSSchool task',
      bgColor: '#2a4144',
      logo: webdev,
    },
  ],
  Other: [
    {
      id: 4-0,
      name: 'Clone-wars presentation ',
      description: 'RSSchool command task presentation',
      ghLink: 'https://github.com/Senobiot/RSSchool-Presentation-medical-portal',
      deployLink: 'https://medical-portal-presentation.netlify.app/',
      stack: [reveal, html, css],
      date: '02.2021',
      additional: 'RSSchool task',
      bgColor: '#a8c7d9',
      logo: presClone,
    },
    {
      id: 4-1,
      name: 'Loadash presentation',
      description: 'Presentation about main loadash features',
      ghLink: 'https://github.com/Senobiot/RSSchool-Presentation-loadash',
      deployLink: 'https://senobiot.github.io/RSSchool-Presentation-loadash/',
      stack: [reveal, html, css],
      date: '01.2021',
      additional: 'RSSchool task',
      bgColor: '#c8c8ca',
      logo: presLoadash,
    },
  ]
}

export default dataList;
