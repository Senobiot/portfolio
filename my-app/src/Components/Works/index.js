import React, { useState, useEffect } from "react";
import { dataList } from '../';
import { MediaCard } from '../'
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "react-tiger-transition/styles/main.min.css";
import './style.css'
import {
  Screen,
  Link,
  glideIn,
  glideOut,
  flip,
  glide,
} from "react-tiger-transition";

glide({
  name: "glide-left",
  direction: "left",
  opacity: 0.3
});
glide({
  name: "glide-right",
  direction: "right",
  opacity: 0.3
});
glideIn({
  name: "glideIn-left",
  direction: "left"
});
glideIn({
  name: "glideIn-top",
  direction: "top"
});
glideOut({
  name: "glideOut-bottom",
  direction: "bottom"
});
glideOut({
  name: "glideOut-right",
  direction: "right"
});
flip({
  name: "flip-right",
  direction: "right",
  duration: 200
});
flip({
  name: "flip-left",
  direction: "left",
  duration: 200
});

const useStyles = makeStyles(theme => ({
  screen: {
    backgroundColor: "white"
  },
  margin: {
    margin: theme.spacing(2)
  },
  menuButton: {
    margin: '0 15px',
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
  menu: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  feedItemRoot: {
    margin: theme.spacing(2)
  },
}));

const Works = ( {works} ) => (
  <Screen className="WorksWrapper" style={{ overflowY: 'auto' }}>
    <FeedList works={works} />
  </Screen>
);

export default Works;

export const DetailScreen = () => {
  const [ currentMemo, setMemo ] = useState({});
  const { work } = useParams();
  let current;
  for (const category in dataList) {
    const findItem = dataList[category].find(e => e.name === work);
    if (findItem) {current = findItem};
    }

  useEffect(() => {
    if (work) {
      setMemo({ currentMemo: current });
    }
  }, [work, current]);

  return (
    <Screen className="detailWrapper">
        <DetailHeader backRoute={'/works'} routeName={'Back to my works'}/>
        <div className="workBg" style={{ backgroundImage: `url(${current ? current.logo : currentMemo.logo})` }}></div>
        <MediaCard 
        image={current ? current.logo : currentMemo.logo}
        title={current ? current.name : currentMemo.name}
        description={current ? current.descriptionFull : currentMemo.descriptionFull}
        ghLink={current ? current.ghLink : currentMemo.ghLink}
        deployLink={current ? current.deployLink : currentMemo.deployLink}
        stack={current ? current.stack : currentMemo.stack}
        additional={current ? current.additional : currentMemo.additional}
        date={current ? current.date : currentMemo.date}
        />
    </Screen>
  );
};

export const DetailHeader = ({ backRoute , routeName, right}) => {
  const classes = useStyles();
  return (
      <AppBar color="default" style={{flexDirection: right ? 'row-reverse' : 'row'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to={backRoute} transition={right ? "glideIn-left" : "glideOut-right"}>
              <ArrowBackIcon style={{transform: right ? 'rotate(180deg)' : 'none'}}/>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{order: right ? -1 : 0}}>
            {routeName}
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

const FeedItem = ({ work }) => 
   (
    <Paper>
      <Link to={`/works/${work.name}`} transition="glideIn-left" style={{ backgroundColor: work.bgColor }} className="workTile">
          <Paper elevation={3} className="workPaper" style={{ backgroundImage: `url(${work.logo})` }}/>
          <h2>{work.name}</h2>
          <h3>{work.description}</h3>
      </Link>
    </Paper>
  );

const FeedList = ({works}) =>
  (
    <React.Fragment>
      {works.map(el => (
        <FeedItem key={el.name} work={el}/>
      ))}
    </React.Fragment>
  );

