import React from 'react';
import { DetailHeader } from '../';
import { Screen } from "react-tiger-transition";
import { viber, email, skype, phone, telegram } from '../'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

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
    backgroundColor: '#bec29f',
  },
  map: {
    width: '100%',
    minHeight: 345,
    border: 0,
    frameBorder: 0
  },
  links: {
    paddingTop: '30px',
    width: 115,
    lineHeight: 3,
    filter: 'brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(1120%) hue-rotate(25deg) brightness(86%) contrast(82%)',
    '&:hover': {
      filter: 'none'
    }
  },
  linksWrapper: {
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  catName: {
    fontWeight: 900,
    color: '#f2c535',
    fontSize: 20,
    letterSpacing: 2,
    textShadow: '2px 2px 3px #000',
  },
  catValue: {
    color: '#000',
    fontWeight: 700
  },
  detailPaper: {
    width: '75vmin',
    opacity: 0.8,
    margin: 'px auto'
  }
});

const Contacts = () => {
  const classes = useStyles();
  const linksData = [
    {href: 'tel:+375257092352', logo: phone, alt: 'phoneLogo', catName: 'Phone', catValue: '+375(25)709-23-52'},
    {href: 'mailto:inter_net@tut.by', logo: email, alt: 'mailLogo', catName: 'email', catValue: 'inter_net@tut.by'},
    {href: 'viber://chat?number=%2B375257092352', logo: viber, alt: 'viberLogo', catName: 'Viber', catValue: '+375(25)709-23-52'},
    {href: 'skype:live:.cid.7d9ad801c58aa76c?call', logo: skype, alt: 'skypeLogo', catName: 'skype', catValue: 'inter_net@tut.by'},
    {href: 'tg://resolve?domain=Senobiot', logo: telegram, alt: 'TgramLogo', catName: 'Tgram', catValue: '@Senobiot'},

  ]
  return (
    <Screen className={classes.contactsWrapper}>
      <DetailHeader backRoute={'/'} routeName={'Home'}/>
    <Card className={classes.detailPaper}>
        <iframe className={classes.map} title="myMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.3059342616016!2d27.478719416198473!3d53.90853928010069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc53670090d95%3A0x6d6f1601259b2831!2z0KHQv9C-0YDRgtC40LLQvdCw0Y8!5e0!3m2!1sru!2sby!4v1616492202662!5m2!1sru!2sby" width="600" height="450" loading="lazy"></iframe>
      <CardActions className={classes.linksWrapper}>
        {linksData.map(e =>  
        <Button size="medium" color="primary">
          <a href={e.href} className={classes.links}>
            <img src={e.logo} className={classes.linksLogos} alt={e.alt} />
            <span className={classes.catName}>{e.catName}<br></br></span>
            <span className={classes.catValue}> {e.catValue}</span>
          </a>
        </Button>)}
      </CardActions>
    </Card>
    </Screen>
  );
}

export default Contacts;
