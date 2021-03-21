import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'inset 0 0 15px 10px #cacaca'
  },
  media: {
    height: 140,
  },
  typography: {
    marginBottom: 20,
    textTransform: 'uppercase',
  }
});

export default function MediaCard({image, title, description, ghLink, deployLink, stack, additional, date}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} className="detailPaper">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" className={classes.typography}>
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
            {date}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p" style={{marginBottom: 20 + 'px'}}>
            {description}
          </Typography>
          <Typography variant="h6" color="#cacaca" component="p" className={classes.typography}>
            <span>Technologies used: <br></br></span>{stack ? stack.map((e,i) => <img key={i} src={e} className="stackImg"></img>) : null}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
          <span >Additional info: </span>{additional}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="middle" color="primary">
            <a target="_blank" rel="noopener noreferrer" href={ghLink} >Ghub Link</a>
        </Button>
        <Button size="middle" color="primary">
            <a target="_blank" rel="noopener noreferrer" href={deployLink} >Deploy Link</a>
        </Button>
      </CardActions>
    </Card>
  );
}
