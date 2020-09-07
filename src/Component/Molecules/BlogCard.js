import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
            {props.blog.clap}
      </CardActions>
    </Card>
  );
}