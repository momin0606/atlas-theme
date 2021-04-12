import React, { Component } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
// import { NavLink } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

export class Header extends Component {
  state = { modal: false, register: false };
  toggle = (e) => {
    e.preventDefault();
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <>
        <div className="fixed-top nav-div p-0">
          <Row style={{ width: "100%" }}>
            <Col></Col>
            <Col lg={{ size: 6 }} className="text-center">
              <h3 className="mt-2 mb-2">Atlas</h3>
            </Col>
            <Col className="text-right ">
              <button
                className="m-2 nav-top-btn"
                size="sm"
                onClick={this.toggle}
              >
                Login/Register
              </button>
              <button className="m-2 nav-top-btn" size="sm">
                <i className="fas fa-heart"></i>
              </button>
              {/* <Button className="m-2" style={navTopBtn} size="sm">
                <i className="fas fa-shopping-cart"></i>
              </Button> */}
              <Drawer />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <Link to="/">
                <button className="m-2 nav-btn active" size="sm">
                  Home
                </button>
              </Link>
              <Link to="/womencollection">
                <button className="m-2 nav-btn" size="sm">
                  Women's Collection
                </button>
              </Link>
              <Link to="/bedsheets">
                <button className="m-2 nav-btn" size="sm">
                  Bedsheets
                </button>
              </Link>
              <Link to="/contactus">
                <button className="m-2 nav-btn" size="sm">
                  Contact Us
                </button>
              </Link>
            </Col>
          </Row>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.state.register ? "Register" : "Login"}
          </ModalHeader>
          <ModalBody>
            <Form hidden={this.state.register} className="text-center">
              <Input className="m-2" type="email" placeholder="Email" />
              <Input className="m-2" type="password" placeholder="Password" />
              <Button className="m-2">Login</Button>
              <p
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ register: true });
                }}
              >
                Don't have an account?
              </p>
            </Form>
            <Form hidden={!this.state.register} className="text-center">
              <Input className="m-2" type="email" placeholder="Email" />
              <Input className="m-2" type="password" placeholder="Password" />
              <Input
                className="m-2"
                type="password"
                placeholder="Confirm Password"
              />
              <Button className="m-2">Register</Button>
              <p
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ register: false });
                }}
              >
                Already have an account?
              </p>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
