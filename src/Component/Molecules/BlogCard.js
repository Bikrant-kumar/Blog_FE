import clsx from 'clsx';
import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50%',
    margin:"auto",
    marginTop:theme.spacing(2)
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [count, setCount]=useState(props.blog.clap);
  const [clap, setClap]=useState("default");
  const handleOnClick= (event)=>{
    if(clap === "default"){
    setCount(count+1);
    setClap("secondary");
    }
    else{
      setCount(count-1);
    setClap("default");
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
          </Avatar>
        }
        title={props.blog.user_id}
        subheader={props.blog.created_on}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
            {props.blog.blog_title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.blog.blog_desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing color="textSecondary">
        <IconButton aria-label="add to favorites" onClick={handleOnClick} color={clap}>
          <FavoriteIcon />
        </IconButton>
            {count}
            {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>     */}
      </CardActions>
    </Card>
  );
}