import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { withRouter } from "react-router-dom";

class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogsT: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.id) {
      if (
        !this.state.blogsT ||
        (this.state.blogsT && this.state.blogsT.id !== this.props.match.params.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
          .then((response) => {
            this.setState({ blogsT: response.data });
          });
      }
    }
  }
  deletePost = () => {
    axios
      .delete(
        'https://jsonplaceholder.typicode.com/posts/' + this.props.id
      )
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    return (
      <Card
        bg="info"
        text="white"
        style={{ width: "100rem", display: "flex", justifyContent: "center" }}
      >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{this.state.blogsT.title}</Card.Title>
          <Card.Text>{this.state.blogsT.body}</Card.Text>
          <button onClick={() => this.deletePost()}>Delete</button>
        </Card.Body>
      </Card>
    );
  }
}

export default withRouter(BlogDetails);
