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

// const useStyles = makeStyles(theme => ({
//   screen: {
//     backgroundColor: "white"
//   },
//   loginScreen: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//     backgroundColor: "white"
//   },
//   margin: {
//     margin: theme.spacing(2)
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   },
//   menu: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   },
//   feedItemRoot: {
//     margin: theme.spacing(2)
//   },
//   cancelAuth: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     margin: theme.spacing(2)
//   },
//   hide: {
//     opacity: 0,
//     visibility: "hidden",
//     zIndex: -1
//   },
//   previous: {
//      height: `calc(100% - 64px)`,
//     position: "absolute",
//     width: "50%",
//     top: 64,
//     left: 0,
//     zIndex: 3
//   },
//   next: {
//     height: `calc(100% - 64px)`,
//     position: "absolute",
//     width: "50%",
//     top: 64,
//     right: 0,
//     zIndex: 3
//   },
  // code: {
  //   color: deepOrange[500],
  //   fontSize: 14,
  //   fontFamily: "monospace",
  //   backgroundColor: grey[100],
  //   borderRadius: 5,
  //   padding: theme.spacing(0.4, 0.6, 0.4, 0.6)
  // }
// }));

// document.getElementById("root").style.height = "100vh";
// document.getElementById("root").style.backgroundColor = "#333";




const Works = () => {
  return (
    <Screen className="WorksWrapper">
      <WorksHeader />
      <FeedList />
    </Screen>
  );
};

export default Works;

const DetailScreen = () => {
  const [ color, setColor ] = useState({});
  const { work } = useParams();
  const current = dataList.find(e => e.name === work);

  useEffect(() => {
    if (work) {
      setColor({ color: current.bgColor });
    }
  }, [work]);

  return (
    <Screen style={{backgroundColor: color.color}}>
        <Link to="/Works" transition="glideOut-right">
          BACK
        </Link>
    </Screen>
  );
};

export { DetailScreen };

const WorksHeader = () => {
  return (
    <div className="WorksHeader"> 
      <Link to="/" transition="glideOut-right">
          <div className="arrow"></div>
      </Link>
      <div className="WorksHeaderTitle">examples of my work</div>
    </div>
  );
};

const FeedItem = ({ work }) => {
  return (
    <Paper>
      <Link to={`/detail/${work.name}`} transition="glideIn-left">
        <div style={{ backgroundColor: work.bgColor, width: "100%", height: 200 }}>
          <Paper elevation={3} style={{ width: 200, height: "80%" }}/>
        </div>
      </Link>
    </Paper>
  );
};

const FeedList = () => {
  return (
    <React.Fragment>
      {dataList.map(el => (
        <FeedItem key={el.name} work={el}/>
      ))}
    </React.Fragment>
  );
};
