import React from 'react';
import { storiesOf } from '@storybook/react';
import BlogCard from '../../Component/Molecules/BlogCard';
import { withKnobs,text, color } from '@storybook/addon-knobs';

storiesOf('Molecules/Blog', module)
    .addDecorator(withKnobs)
    

  .add('with 1 Blogcard', () => {

    return (
       <BlogCard blog={
        {
            "blog_id": 7,
            "blog_title":text("Title","Two React Tips"),
            "blog_desc": text("Desc","React is known for its relative lack of pitfalls and small API surface. This makes the few issues it has all the more frustrating, especially for the beginners."),
            "created_on": text("Date","2020-09-06"),
            "clap": 25,
            "user_id": text("UserName","bikrantkmr6")
        }}/>
      )
      })