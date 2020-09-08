import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '../Atoms/Button';
import Card from '@material-ui/core/Card';
import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:theme.spacing(2),
    width: '50%',
    margin:'auto',
    flexDirection:'column'
  },
  item:{
      marginTop:theme.spacing(1),
      marginRight:theme.spacing(1),
      marginLeft:theme.spacing(1),
      marginBottom:theme.spacing(1)
  }
}));

function AddBlog() {
  const classes = useStyles();
  const { user } = useAuth0();
  const [title,setTitle] = useState(null);
  const [desc,setDesc] = useState(null);
  const [blog,setBlog] = useState({
    blog_title:'',
    blog_desc:'',
    created_on:Date(),
    clap:0,
    user_id:user.nickname
  });
  const handleTitleChange = (event ) => {
    setTitle(event.target.value);
    blog.blog_title=event.target.value;
  };
  const handleBlogChange = (event) => {
    setDesc(event.target.value);
    blog.blog_desc=event.target.value;
  };
  const addBlog = () => { 
    axios.post('http://localhost:8080/addBlog', {
    blog_title:blog.blog_title,
    blog_desc:blog.blog_desc,
    user_id:blog.user_id,
    created_on:new Date().toISOString().split('T')[0],
    clap:blog.clap
  })
  .then(function (response) {
    console.log(response);
    alert("Your Blog is saved");
    setTitle("");
    setDesc("");
  })
  };

  return (
    <Card className={classes.root}>
        <TextField
          id="outlined"
          label="Title"
          variant="outlined"
          className={classes.item}
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Blog"
          multiline
          rows={6}
          variant="outlined"
          className={classes.item}
          value={desc}
          onChange={handleBlogChange}
        />
        <Typography className={classes.item}>
            <Button text="ADD BLOG" variant="outlined" OnClick={addBlog}/>
        </Typography>
    </Card>
  );
}

export default AddBlog