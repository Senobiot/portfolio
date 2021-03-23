import React from 'react';
import { DetailHeader } from '../';
import { Screen } from "react-tiger-transition";
import { useSpring, animated } from 'react-spring'
import { viber, email, skype, phone, telegram } from '../'
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  contactsWrapper: {
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '100px',
    backgroundColor: '#b2c5a9',
  },
});

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Stack = () => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <Screen className={classes.contactsWrapper}>
      <DetailHeader backRoute={'/'} routeName={'Home'}/>
      <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
    </Screen>
  );
}

export default Stack;

