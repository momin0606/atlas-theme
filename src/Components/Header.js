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

const navTopBtn = {
  border: "none",
  background: "transparent",
  color: "#7c7c7c",
};
const navBtn = {
  border: "none",
  background: "transparent",
  color: "#7c7c7c",
  fontWeight: "bold",
};
export class Header extends Component {
  state = { modal: false, register: false };
  toggle = (e) => {
    e.preventDefault();
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <>
        <div
          className="fixed-top nav-div p-0"
          style={{ background: "#ffffff" }}
        >
          <Row style={{ width: "100%" }}>
            <Col></Col>
            <Col lg={{ size: 6 }} className="text-center">
              <h3 className="mt-2 mb-2">Atlas</h3>
            </Col>
            <Col className="text-right ">
              <Button
                style={navTopBtn}
                className="m-2 "
                size="sm"
                onClick={this.toggle}
              >
                Login/Register
              </Button>
              <Button className="m-2" style={navTopBtn} size="sm">
                <i className="fas fa-heart"></i>
              </Button>
              {/* <Button className="m-2" style={navTopBtn} size="sm">
                <i className="fas fa-shopping-cart"></i>
              </Button> */}
              <Drawer />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <Link to="/">
                <Button style={navBtn} className="m-2" size="sm">
                  Home
                </Button>
              </Link>
              <Link to="/womencollection">
                <Button style={navBtn} className="m-2" size="sm">
                  Women's Collection
                </Button>
              </Link>
              <Link to="/bedsheets">
                <Button style={navBtn} className="m-2" size="sm">
                  Bedsheets
                </Button>
              </Link>
              <Link to="/contactus">
                <Button style={navBtn} className="m-2" size="sm">
                  Contact Us
                </Button>
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
