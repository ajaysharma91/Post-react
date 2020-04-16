import React from "react";
import "./Blog.css";
import axios from "axios";

import Card from "react-bootstrap/Card";
class Blogss extends React.Component {
  render() {
    return (
      <>
        <div
          className="col-sm-6 col-md-4 col-lg-3"
          style={{ marginBottom: "15px" }}
        >
          <Card bg="info" text="white" onClick={this.props.clicked}>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Subtitle
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
                className="mb-2 p-3"
              >
                PM NArendra Modi
              </Card.Subtitle>
              <p>{this.props.desc}</p>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
export default Blogss;
