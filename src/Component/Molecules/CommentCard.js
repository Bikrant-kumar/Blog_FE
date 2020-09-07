import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


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
      marginTop:theme.spacing(1),
  },
  space:{
    marginTop:theme.spacing(1),
    marginLeft:theme.spacing(2)
  }

}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        title={props.comment.user_id}
        subheader={props.comment.blog.created_on}
      />
      <CardContent>
        <Typography >
            <Card >
                <Typography variant="body2" component="p" className={classes.space}>
                    {props.comment.blog.blog_title}
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" className={classes.space}>
                    {props.comment.blog.user_id}
                </Typography>   
            </Card>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" >
            {props.comment.comment_desc}
        </Typography>
      </CardContent>
    </Card>
  );
}