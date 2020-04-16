import React from "react";
import Post from "./Post";
import Blogs from "./Blogs";
import "./Blog.css";
import BlogDetails from './BlogDetails';
import {Route,NavLink, Switch} from 'react-router-dom';
class Blog extends React.Component {
  render() {
    return (
      <>
        <div class="Nav">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact activeClassName="my-active" activeStyle={{color:'#fa923f'}}>Posts</NavLink>
                </li>
                <li>
                  <NavLink to="/new-post" activeClassName="my-active" activeStyle={{color:'#fa923f',textDecoration:'underline'}}>New Post</NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <marquee
          style={{
            color: "brown",
            width: "100%",
            behavior: "scroll",
            scrollamount: "50",
            fontSize: "20px",
            direction: "right",
          }}
        >
          Welcome On Blogs
        </marquee>
        <Route path="/" exact><Blogs /></Route>
        <Switch>
        <Route path="/new-post" ><Post /></Route>
        <Route path="/:id" ><BlogDetails /></Route>
        </Switch>
       
      </>
    );
  }
}
export default Blog;
