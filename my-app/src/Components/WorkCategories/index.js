import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CSSTransition } from 'react-transition-group';
import { drop, Link } from 'react-tiger-transition';
import dataList from '../Works/data'
import Works from '../Works/'
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  menuButton: {
    marginRight: 15,
    color: '#6d747a',
    '& a:visited': {
        color: '#6d747a',
    },
    '& svg': {
        fontSize: '28px',
    },
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    fontWeight: 900,
    color: '#6d747a'
  },
  tabsBtn: {
    fontWeight: 700,
    textShadow: '1px 2px 5px #000',
    marginRight: 70,
    fontSize: '20px'
  },
  formControl: {
    margin: theme.spacing(0, 0, 2, 2),
    width: 120,
  },
  header: {
    backgroundColor: '#cfd8dc',
  },
  indicator: {
    backgroundColor: '#78909c',
  },
  transitionContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    perspective: 1200,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  transitionLayout: {
    height: '95%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: `translate3d(0, 0, 0)`,
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
  },
  transitionScreen: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const tabs = Object.keys(dataList);

const WorkCategories = ({category, categoryHandler}) => {
  const classes = useStyles();
  const [value, setValue] = useState(tabs[category]);
  const [transition, setTransition] = useState('transition-left');
  const animation = 'drop';

  function handleTabChange(event, newValue) {
    setTransition(value > newValue ? 'transition-right' : 'transition-left');
    setValue(newValue);
    categoryHandler(tabs.indexOf(newValue));
  }

  
  useEffect(() => {
    const nextAnimation = { label: 'drop', func: drop };
    if (nextAnimation) {
      nextAnimation.func({
        name: 'transition-left',
      });

      nextAnimation.func({
        name: 'transition-right',
        direction: 'right',
      });
    }
  }, [animation]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>

        <Tabs value={value} onChange={handleTabChange} centered classes={{indicator: classes.indicator }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" transition="glideOut-right">
              <ArrowBackIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          </Toolbar>
          {tabs.map(tab => (
            <Tab key={tab} label={tab} value={tab} className={classes.tabsBtn}/>
          ))}
        </Tabs>
      </AppBar>
      <div className={classes.transitionContainer}>
        {tabs.map(category => (
          <CSSTransition
            key={category}
            mountOnEnter
            unmountOnExit
            in={category === value}
            timeout={600}
            classNames={transition}
          >
            <div className={classes.transitionLayout}>
              <div className={classNames(classes.transitionScreen, classes[category])}>
                <Works works={dataList[category]} />
              </div>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}
export default WorkCategories;
