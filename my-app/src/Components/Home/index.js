import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import "react-tiger-transition/styles/main.min.css";
import './style.css'
import { Navigation, Route, Screen, Link } from "react-tiger-transition";

document.getElementById("root").style.height = "100vh";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 100}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 50}px,${y / 20}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 15}px,${1}px,0)`;
const trans4 = (x, y) => `rotate(${x / 4}deg)`;
const trans5 = (x, y) => `rotate(${-x / 4}deg)`;
const trans6 = (x, y) => `translate3d(${x / 25}px,${1}px,0)`;

const Home = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
return (
 <Screen className='tabWrapper' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
    <Link to="/About" transition='glide-right' className='tabSkew'>
        <div className='tabContent'>About me</div>
    </Link>
    <Link to="/Works" transition='glide-left' className='tabSkew'>
        <div className='tabContent'>My Works</div>
    </Link>
    <Link to="/Works" transition='glide-left' className='tabSkew'>
        <div className='tabContent'>My Stack</div>
    </Link>
    <Link to="/WorkCategories" transition='glide-left' className='tabSkew'>
        <div className='tabContent'>Contacts</div>
    </Link>
    <animated.div className='card1' style={{ transform: props.xy.interpolate(trans1) }} />
    <animated.div className='card2' style={{ transform: props.xy.interpolate(trans2) }} />
    <animated.div className='card3' style={{ transform: props.xy.interpolate(trans3) }} />
    <animated.div className='card4' style={{ transform: props.xy.interpolate(trans4) }} />
    <animated.div className='card5' style={{ transform: props.xy.interpolate(trans5) }} />
    <animated.div className='card6' />
    <animated.div className='bg-card' style={{ transform: props.xy.interpolate(trans6) }} />
 </Screen>
)};
export default Home;