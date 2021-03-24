import React from 'react';
import { DetailHeader } from '../';
import { Screen } from 'react-tiger-transition';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {
  myPhoto,
  univerImg,
  rsImg,
  nexo,
  minskprom,
  integral,
  expert,
  certificate,
} from './../../assets';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50vw',
    '@media (max-width:1365px)': {
      maxWidth: '75vw',
    },
    '@media (max-width:767px)': {
      maxWidth: '99vw',
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  aboutWrapper: {
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '100px',
    backgroundColor: '#5c6f80',
  },
  avatar: {
    width: '10vw',
    height: '10vw',
    boxShadow: '0px 0px 2px 3px #5c6f80',
    '@media (max-width:767px)': {
      minWidth: 75,
      minHeight: 75,
    },
  },
  avatarSx: {
    width: '5vw',
    height: '5vw',
    boxShadow: '0px 0px 2px 3px #5c6f80',
    '@media (max-width:767px)': {
      minWidth: 50,
      minHeight: 50,
    },
  },
  avatarImg: {
    width: '100%',
  },
  accDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    '@media (max-width:767px)': {
      padding: '8px 5px',
    },
  },
  accHeader: {
    fontSize: '20px',
    letterSpacing: '2px',
    color: '#5c6f80',
    fontWeight: 700,
    textTransform: 'uppercase',
    textShadow: '0 1px 2px rgb(2, 2, 2)',
  },
  cardHeader: {
    display: 'flex',
    width: '100%',
    fontSize: '20px',
    letterSpacing: '2px',
    color: '#5c6f80',
    fontWeight: 700,
    textTransform: 'uppercase',
    textShadow: '0 1px 2px rgb(2, 2, 2)',
    '@media (max-width:767px)': {
      fontSize: '14px',
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.aboutWrapper}>
      <DetailHeader backRoute={'/'} routeName={'Home'} right={true} />
      <AboutPaper />
    </Screen>
  );
};

export default About;

const AboutPaper = () => {
  const classes = useStyles();

  const getAge = (date) => {
    const now = new Date();
    const birth = new Date(date);
    let age = now.getFullYear() - birth.getFullYear();
    const diff = now.getMonth() - birth.getMonth();
    if (diff < 0 || (diff === 0 && now.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img
              src={myPhoto}
              className={classes.avatarImg}
              alt="myPhoto"
            ></img>
          </Avatar>
        }
        title="Aliaksandr Kulik"
        titleTypographyProps={{ variant: 'h4' }}
        subheaderTypographyProps={{ variant: 'h5' }}
        subheader={`Minsk, march 01, 1983 (${getAge('1983/03/01')} years)`}
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          Hello! I am a beginner developer, i have no commercial development
          experience right now. But there are necessary skills and experience
          gained in the process of studying at RSSSchool JS Front-End course and
          Short Track program.
        </Typography>
      </CardContent>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.accHeader}>Education</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accDetails}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatarSx}>
                <img
                  src={univerImg}
                  className={classes.avatarImg}
                  alt="univerImg"
                ></img>
              </Avatar>
            }
            title="Belorussian State Ecomonic University"
            titleTypographyProps={{ variant: 'h5' }}
            subheaderTypographyProps={{ variant: 'h6' }}
            subheader="Faculty of Marketing, Advertising specialization, 2005"
          />
          <CardHeader
            avatar={
              <Avatar className={classes.avatarSx}>
                <img
                  src={rsImg}
                  className={classes.avatarImg}
                  alt="rsImg"
                ></img>
              </Avatar>
            }
            title="RSSchool"
            titleTypographyProps={{ variant: 'h5' }}
            subheaderTypographyProps={{ variant: 'h6' }}
            subheader="JS Front-End, 2021"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.accHeader}>work experince</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accDetails}>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar className={classes.avatarSx}>
                <img
                  src={nexo}
                  className={classes.avatarImg}
                  alt="nexoImg"
                ></img>
              </Avatar>
            }
            title='"NEXO" Company, Minsk'
            titleTypographyProps={{ variant: 'h5' }}
            subheaderTypographyProps={{ variant: 'h6' }}
            subheader="Account manager, 2005 - 2007"
          />
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar className={classes.avatarSx}>
                <img
                  src={integral}
                  className={classes.avatarImg}
                  alt="integralImg"
                ></img>
              </Avatar>
            }
            title='INTEGRAL" State Company, Minsk'
            titleTypographyProps={{ variant: 'h5' }}
            subheaderTypographyProps={{ variant: 'h6' }}
            subheader="Head of the economic bureau,	2007 - 2014"
          />
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar className={classes.avatarSx}>
                <img
                  src={expert}
                  className={classes.avatarImg}
                  alt="expertImg"
                ></img>
              </Avatar>
            }
            title='"Forensic committee" State Company, Minsk'
            titleTypographyProps={{ variant: 'h5' }}
            subheaderTypographyProps={{ variant: 'h6' }}
            subheader="Procurement specialist, 2014 - 2015"
          />
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar className={classes.avatarSx}>
                <img
                  src={minskprom}
                  className={classes.avatarImg}
                  alt="minskpromImg"
                ></img>
              </Avatar>
            }
            title='MinskPromStroy" State Company, Minsk'
            titleTypographyProps={{ variant: 'h5' }}
            subheaderTypographyProps={{ variant: 'h6' }}
            subheader="Economist / accountant, 2016 - 2019"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.accHeader}>Certificates</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accDetails}>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar className={classes.avatarSx}>
                <img
                  src={certificate}
                  className={classes.avatarImg}
                  alt="certificateImg"
                ></img>
              </Avatar>
            }
            title={
              <a
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.rs.school/certificate/8ksyysmf"
              >
                <span>
                  RS SChool Certificate Of Completion JS/FE 2020 Q3
                  (JAVASCRIPT), 24.02.2021
                </span>
              </a>
            }
            titleTypographyProps={{ variant: 'h5' }}
            subheaderTypographyProps={{ variant: 'h6' }}
          />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
