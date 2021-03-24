import React, { useState, useEffect } from 'react';
import { DetailHeader } from '../';
import { Screen } from 'react-tiger-transition';
import { useSpring, animated } from 'react-spring';
import {
  js,
  css,
  html,
  jquery,
  redux,
  mongo,
  express,
  node,
  leaflet,
  spring,
  material,
  react,
  sass,
} from '../';
import './styles.css';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Stack = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const techImgArrayMain = [js, css, html, react, redux];
  const techImgArrayAdd = [node, express, mongo, sass];
  const techImgArrayLibs = [material, jquery, leaflet, spring];
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Screen
      className="contactsWrapper"
      onMouseMove={
        width >= 1366
          ? ({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })
          : null
      }
    >
      <DetailHeader backRoute={'/'} routeName={'Home'} />
      <div className="categoryLine">Main Technologies Stack</div>
      {techImgArrayMain.map((logo, idx) => (
        <animated.div
          key={idx}
          className="card"
          style={{
            transform: props.xys.interpolate(trans),
            backgroundImage: `url('${logo}')`,
          }}
        />
      ))}
      <div className="categoryLine">Additional Technologies Stack</div>
      {techImgArrayAdd.map((logo, idx) => (
        <animated.div
          key={idx}
          className="card"
          style={{
            transform: props.xys.interpolate(trans),
            backgroundImage: `url('${logo}')`,
          }}
        />
      ))}
      <div className="categoryLine">Libs Stack</div>
      {techImgArrayLibs.map((logo, idx) => (
        <animated.div
          key={idx}
          className="card"
          style={{
            transform: props.xys.interpolate(trans),
            backgroundImage: `url('${logo}')`,
          }}
        />
      ))}
    </Screen>
  );
};

export default Stack;
