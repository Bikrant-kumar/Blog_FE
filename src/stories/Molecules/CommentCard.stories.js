import React from 'react';
import { storiesOf } from '@storybook/react';
import CommentCard from '../../Component/Molecules/CommentCard';
import { withKnobs,text, color } from '@storybook/addon-knobs';

storiesOf('Molecules/Comment', module)
  .addDecorator(withKnobs)
  
  .add('with 1 Commentcard', () => {
    return (
       <CommentCard comment={
        {
                "comment_id": 8,
                "comment_desc": text("Desc","this blog post magically appeared to solve my issue"),
                "blog": {
                    "blog_id": 6,
                    "blog_title": text("Blog Title","My Inspiration"),
                    "blog_desc": "Today I gave a talk on React Hot Loader, Redux, and the powerful developer tools that Redux makes possible. If you haven’t seen my talk yet, wait for the video — I’m sure it’ll be up soon!",
                    "created_on": text("Date","2020-09-06"),
                    "clap": 10,
                    "user_id": text("BLog UserName","bikrantkmr6")
                },
                "user_id": text("Comment UserName","bikrantkmr6")
        }}/>
      )
      })