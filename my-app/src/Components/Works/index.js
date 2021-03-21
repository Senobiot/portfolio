import React, { useState, useEffect } from "react";
import Home from './../Home/';
import dataList from './data';
import { BrowserRouter as Router, useParams } from "react-router-dom";
import './style.css'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MediaCard from './MediaCard'
import "react-tiger-transition/styles/main.min.css";
import {
  Navigation,
  Route,
  Screen,
  Link,
  scale,
  glideIn,
  glideOut,
  flip,
  glide,
  cube
} from "react-tiger-transition";

cube({
  name: "cube",
  direction: "right",
  duration: 200
});
scale({
  name: "scale",
  scale: 1.2,
  exit: {
    delay: 100
  }
});
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
  loginScreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  margin: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menu: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  feedItemRoot: {
    margin: theme.spacing(2)
  },
  cancelAuth: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: theme.spacing(2)
  },
  hide: {
    opacity: 0,
    visibility: "hidden",
    zIndex: -1
  },
}));

const Works = ( {works} ) => {
  return (
    <Screen className="WorksWrapper" style={{overflowY: 'auto'}}>
      <FeedList works={works}/>
    </Screen>
  );
};

export default Works;

const DetailScreen = () => {
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
  }, [work]);

  return (
    <Screen className="detailWrapper">
        <DetailHeader title={work}/>
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

export { DetailScreen };

const DetailHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <div style={{marginBottom: 100}}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/WorkCategories" transition="glideOut-right">
              <ArrowBackIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const FeedItem = ({ work }) => {
  return (
    <Paper>
      <Link to={`/detail/${work.name}`} transition="glideIn-left" style={{ backgroundColor: work.bgColor }} className="workTile">
          <Paper elevation={3} className="workPaper" style={{ backgroundImage: `url(${work.logo})` }}/>
          <h2>{work.name}</h2>
          <h3>{work.description}</h3>
      </Link>
    </Paper>
  );
};

const FeedList = ({works}) => {
  return (
    <React.Fragment>
      {works.map(el => (
        <FeedItem key={el.name} work={el}/>
      ))}
    </React.Fragment>
  );
};
