import React, { Component } from "react";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { getSuits } from "../store/actions/suitsActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/actions/cartActions";
import Badge from "@material-ui/core/Badge";
import TemporaryDrawer from "./../Components/Drawer";
export class Suits extends Component {
  componentDidMount() {
    this.props.getSuits();
  }
  render() {
    var { suits, uid } = this.props;

    return (
      <>
        <h3 className="mt-5 mb-3">3pc Suits</h3>
        <Row>
          {suits &&
            suits.map((suit) => {
              return (
                <Col lg={{ size: 3 }} className="mt-2">
                  <Badge
                    badgeContent={"-50%"}
                    // className="secondary-bg-cust gold-text-cust"
                    color="primary"
                    style={{ padding: "10px" }}
                  >
                    <Card>
                      <Link to={"/womencollection/" + suit.id}>
                        <CardImg
                          top
                          width="100%"
                          // style={{ height: "40vh" }}
                          src={suit.images[0]}
                          alt="3PC suit"
                        />
                      </Link>
                      <CardBody className="home-col-2-bg">
                        <p className="m-0">
                          <b>
                            {suit.description}&nbsp;{suit.name}
                          </b>
                        </p>
                        <p className="m-0">
                          <del>Rs.{suit.price * 2}</del>{" "}
                          <i class="fas fa-arrow-right"></i>Rs.
                          {suit.price}
                        </p>
                        <p className="m-0">
                          Stock:{" "}
                          {suit.stock ? (
                            suit.stock
                          ) : (
                            <b className="gold-text-cust">Out Of Stock</b>
                          )}
                        </p>
                        <Row>
                          <Col className="text-center">
                            <button
                              hidden={!uid}
                              className="m-2 card-btn"
                              size="sm"
                            >
                              <i className="fas fa-heart"></i>
                            </button>
                            <button
                              className="m-2 card-btn"
                              hidden={suit.stock <= 0}
                              onClick={(e) => {
                                e.preventDefault();
                                this.props.addToCart({
                                  id: suit.id,
                                  quantity: 1,
                                });
                              }}
                              size="sm"
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                            <Link to={"/womencollection/" + suit.id}>
                              <button className="m-2 card-btn" size="sm">
                                <i className="fas fa-eye"></i>
                              </button>
                            </Link>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Badge>
                </Col>
              );
            })}
        </Row>
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
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    getSuits: () => dispatch(getSuits()),
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    // login: (credentials) => dispatch(login(credentials)),
    // register: (credentials, password) =>
    // dispatch(register(credentials, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Suits);
