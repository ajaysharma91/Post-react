import React from "react";
import "./Post.css";
import axios from "axios";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [
        {
          title: "jj",
          author: "jhgjh",
          desc: "jgj",
        },
      ],
    };
  }
  handleChange = (e) => {
    if (e.target.name === "title") {
      this.setState({ title: e.target.value });
    } else if (e.target.name === "author") {
      this.setState({ author: e.target.value });
    } else {
      this.setState({ desc: e.target.value });
    }
  };
  handleSubmit = (e) => {
    console.log(this.state.title);
    const newblog = {
      title: this.state.title,
      body: this.state.desc,
      author: this.state.author,
    };
    const blogp = [...this.state.blog, newblog];
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newblog)
      .then((response) => {
        console.log(response);
      });
    //this.setState({ blog: blogp, title: "", author: "", desc: "" });
    e.preventDefault();
    e.target.reset();
  };
  render() {
    return (
      <>
        <div className="row post mt-3">
          <form className="" onSubmit={this.handleSubmit}>
            <fieldset className=" bg-info fset">
              <legend>Upload New Post...</legend>
              <div className="form-group form-text">
                <label htmlFor="title">Title:</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={this.state.blog.title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group form-text">
                <label htmlFor="author">Author:</label>
                <input
                  className="form-control"
                  type="text"
                  name="author"
                  value={this.state.blog.author}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group form-text">
                <label> Description </label>
                <textarea
                  className="form-control"
                  value={this.state.blog.desc}
                  name="desc"
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                style={{ width: "95%" }}
                className="btn btn-success"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </>
    );
  }
}
export default Post;
