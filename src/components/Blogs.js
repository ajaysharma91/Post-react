import React from "react";
import "./Blog.css";
import axios from "axios";
import Blogss from "./Blogss";
import Card from "react-bootstrap/Card";
import BlogDetails from "./BlogDetails";
import { withRouter } from "react-router-dom";
class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      settlementId: null,
      error: false,
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const blog = response.data.slice(0, 4);
        this.setState({ blogs: blog });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
  handlePostDetailsById = (id) => {
    this.setState({ settlementId: id });
    this.props.history.push('/' + id);
  };
  render() {
    let blog = <p style={{ textAlign: "center" }}>Something Went Wrong!!!</p>;
    if (!this.state.error) {
      blog = this.state.blogs.map((data) => {
        return (
          <Blogss key={data.id}
            title={data.title}
            desc={data.body}
            clicked={() => this.handlePostDetailsById(data.id)}
          />
        );
      });
    }
    return (
      <>
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {blog}
        </div>
      </>
    );
  }
}
export default withRouter(Blogs);
