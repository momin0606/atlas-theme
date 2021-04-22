import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "./Drawer";
// import { NavLink } from "react-router-dom";
import {
  Col,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  NavItem,
  Row,
} from "reactstrap";
import { connect } from "react-redux";

export class Header extends Component {
  state = { modal: false, register: false, dark: true };
  darkTheme = (e) => {
    e.preventDefault();
    if (!this.state.dark) {
      this.setState({ dark: true });
      document.documentElement.classList.add("dark-theme");
    } else {
      this.setState({ dark: false });
      document.documentElement.classList.remove("dark-theme");
    }
  };
  toggle = (e) => {
    e.preventDefault();
    this.setState({ modal: !this.state.modal });
  };
  render() {
    var { uid } = this.props;
    return (
      <>
        <div id="navbar" className="fixed-top nav-div p-0">
          <Row style={{ width: "100%" }}>
            <Col>
              {" "}
              <button
                className="mt-2 mb-2 ml-2 card-btn"
                onClick={this.darkTheme}
              >
                {this.state.dark ? (
                  <>
                    <i class="fas fa-power-off"></i>&nbsp;Dark Theme
                  </>
                ) : (
                  <>
                    <i class="fas fa-power-off"></i>&nbsp;Light Theme
                  </>
                )}
              </button>
            </Col>
            <Col lg={{ size: 6 }} className="text-center">
              <h3 className="mt-2 mb-2">Atlas</h3>
            </Col>
            <Col className="text-right ">
              <button
                className="m-2 nav-top-btn"
                size="sm"
                onClick={this.toggle}
                hidden={uid}
              >
                Login/Register
              </button>
              <Link hidden={!uid} to="/favorites">
                <button className="m-2 nav-top-btn" size="sm">
                  <i className="fas fa-heart"></i>
                </button>
              </Link>
              {/* <Button className="m-2" style={navTopBtn} size="sm">
                <i className="fas fa-shopping-cart"></i>
              </Button> */}
              <Drawer />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <NavLink
                exact
                to="/"
                className="m-2 nav-btn"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/womencollection"
                className="m-2 nav-btn"
                activeClassName="active"
              >
                Women's Collection
              </NavLink>
              <NavLink
                to="/bedsheets"
                className="m-2 nav-btn"
                activeClassName="active"
              >
                Bedsheets
              </NavLink>
              <NavLink
                to="/contactus"
                className="m-2 nav-btn"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </Col>
          </Row>
        </div>
        <Modal
          className="primary-bg-cust primary-border text-white"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            toggle={this.toggle}
            className="primary-bg-cust gold-text-cust "
          >
            {this.state.register ? "Register" : "Login"}
          </ModalHeader>
          <ModalBody className="primary-bg-cust">
            <Form hidden={this.state.register} className="text-center">
              <Input className="mt-3 mb-3" type="email" placeholder="Email" />
              <Input
                className="mt-3 mb-3"
                type="password"
                placeholder="Password"
              />
              <button className="mt-3 mb-3 card-btn checkout-btn">Login</button>
              <p
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ register: true });
                }}
                className="gold-text-cust"
              >
                Don't have an account?
              </p>
            </Form>
            <Form hidden={!this.state.register} className="text-center">
              <Input className="mt-3 mb-3" type="email" placeholder="Email" />
              <Input
                className="mt-3 mb-3"
                type="password"
                placeholder="Password"
              />
              <Input
                className="mt-3 mb-3"
                type="password"
                placeholder="Confirm Password"
              />
              <button className="mt-3 mb-3 card-btn checkout-btn">
                Register
              </button>
              <p
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ register: false });
                }}
                className="gold-text-cust"
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

export function mapStateToProps(state) {
  return {
    uid: state.auth.uid,
    loading: state.auth.requested,
    registered: state.auth.registered,
    suits: state.suits.suits,
    bedsheets: state.bedsheets.bedsheets,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    // getSuits: () => dispatch(getSuits()),
    // getBedSheets: () => dispatch(getBedSheets()),
    // login: (credentials) => dispatch(login(credentials)),
    // register: (credentials, password) =>
    // dispatch(register(credentials, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
