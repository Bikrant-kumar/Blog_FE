import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Tab from '../Molecules/Tab';
import BlogTemplate from '../Templates/BlogTemplate';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../Atoms/Profile';
import AppBar from '../Molecules/AppBar';
import CommentTemplate from '../Templates/CommentTemplate';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import AddBlog from '../Molecules/AddBlog';

function Home() {
    const [blog, setBlog] = useState([]);
    const [comment,setComment] = useState([]);
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        axios
        .get(
        `http://localhost:8080/blog`)
            .then(res => {
                setBlog(res.data);
                })
            .catch(err => {
                console.log(err);
                  });

        axios
        .get(
        `http://localhost:8080/comment`)
            .then(res => {
                setComment(res.data);
                })
            .catch(err => {
                console.log(err);
                });
    }, []);    

    return (
     <div>
        <AppBar/>
         { isAuthenticated && (
        <BrowserRouter>
            <Profile/>
            <Tab/>
            <Switch>
                <Route exact path='/' component={()=> <BlogTemplate blog={blog}/> }/>,
                <Route exact path='/comment' component={()=> <CommentTemplate comment={comment}/>}/> 
                <Route exact path='/addblog' component={AddBlog}/>
            </Switch>
        </BrowserRouter>
        )}
     </div>
    )
}

export default Home

