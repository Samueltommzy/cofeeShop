import React from 'react'
import { Card, CardActions,CardContent, Button,Typography,CardHeader,Avatar, IconButton, CardMedia, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Share } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    marginTop: '8px',
    maxHeight: '350px',
    '&:hover':{
      cursor: 'pointer',
      transition: '0.2'
    }
  }
});

export const CoffeeCard = (props) => {
  const classes = useStyles();
  const {avatarSrc,title,subTitle,description,imgSrc} = props;
  return (
    <Paper elevation = "10">
       <Card className={classes.root}>
       <CardHeader
        avatar={
          <Avatar src ={avatarSrc} aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Share/>
          </IconButton>
          
        }
        title={title}
        subheader={subTitle}
      />
       <CardMedia
        style = {{height:"150px"}}
        image={imgSrc}
      />
    <CardContent>
      <Typography variant="body2" component="p" noWrap>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
    </Paper> 
  )
}
