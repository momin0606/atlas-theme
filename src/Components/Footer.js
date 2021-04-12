import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Col, Form, Input, Row } from "reactstrap";

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-div mt-5">
          <Row>
            <Col lg={{ size: 4 }} className="text-left">
              <h4 className="mt-3 mb-2 ml-3">About Us</h4>
              <p className=" ml-3">
                We are something somethingWe are something something We are
                something something We are something something We are something
                something We are something something
              </p>
            </Col>
            <Col lg={{ size: 4, offset: 4 }} className="text-right">
              <h4 className="mt-3 mb-2 mr-3">Contact Us</h4>
              <Form className="p-2">
                <Input className="m-2 mr-3" placeholder="Name" />
                <Input className="m-2 mr-3" placeholder="Email" />
                <Input
                  className="m-2 mr-3"
                  placeholder="Message"
                  type="textarea"
                />
                <button className="nav-top-btn">Submit</button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="text-center m-3">Copyright Stuff</Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Footer;
