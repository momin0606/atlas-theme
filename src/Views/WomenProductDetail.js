import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
// import Carousel from "react-gallery-carousel";
// import "react-gallery-carousel/dist/index.css";
import DiscountComp from "../Components/DiscountComp";
import { connect } from "react-redux";
import { getSuits } from "../store/actions/suitsActions";
import { Link } from "react-router-dom";
import { addToCart } from "../store/actions/cartActions";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
export class WomenProductDetail extends Component {
  componentDidMount() {
    this.props.getSuits();
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.match.params.id !== this.props.match.params.id;
  }
  render() {
    var { suits } = this.props;
    var suitId = this.props.match.params.id;
    var thisSuit = suits && suits.find((suit) => suit.id == suitId);
    var suggestedSuit = suits && suits.find((suit) => suit.id != suitId);
    console.log(suggestedSuit);
    return (
      <>
        <Container className="pt-5">
          <Card className="mt-5 primary-bg-cust primary-border">
            <CardBody>
              <Row>
                <Col lg={{ size: 6, offset: 0 }}>
                  {thisSuit ? (
                    <ImageGallery
                      showPlayButton={false}
                      showNav={false}
                      items={thisSuit.images.reduce((acc, val) => {
                        return acc.concat({
                          original: val,
                          thumbnail: val,
                        });
                      }, [])}
                    />
                  ) : null}
                </Col>
                <Col className="pl-2 pr-2" lg={{ size: 6, offset: 0 }}>
                  {thisSuit ? (
                    <>
                      <h2 className="mt-3 ml-3">
                        {thisSuit.description}&nbsp;
                        {thisSuit.name}
                      </h2>
                      <h5 className="mt-3 ml-3">
                        <b>
                          <del>Rs.{thisSuit.price * 2}</del>{" "}
                          <i class="fas fa-arrow-right"></i>Rs.
                          {thisSuit.price}
                        </b>
                      </h5>
                      <p className="mt-3 ml-3">{thisSuit.details}</p>
                      <button className="mt-3 card-btn checkout-btn" size="sm">
                        ADD TO FAVORITE&nbsp;<i className="fas fa-heart"></i>
                      </button>
                      <button
                        className="mt-3 card-btn checkout-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.addToCart({
                            id: thisSuit.id,
                            quantity: 1,
                          });
                        }}
                        size="sm"
                      >
                        ADD TO CART&nbsp;
                        <i className="fas fa-shopping-cart"></i>
                      </button>
                    </>
                  ) : null}
                </Col>
              </Row>
              {suggestedSuit ? (
                <Row className="mt-5" hidden={!suggestedSuit}>
                  <Col lg={{ size: 6 }}>
                    <h5>You May Also Like</h5>
                    <Card className="primary-bg-cust primary-border">
                      <CardBody>
                        <Row>
                          <Col lg={{ size: 3 }}>
                            <Link to={"/womencollection/" + suggestedSuit.id}>
                              <img
                                width="100%"
                                src={suggestedSuit && suggestedSuit.images[0]}
                                alt="hero"
                              ></img>
                            </Link>
                          </Col>
                          <Col lg={{ size: 6 }}>
                            <p>
                              <b>
                                {suggestedSuit && suggestedSuit.description}
                                &nbsp;
                                {suggestedSuit && suggestedSuit.name}
                              </b>
                            </p>
                            <p>
                              <del>
                                Rs.{suggestedSuit && suggestedSuit.price}
                              </del>{" "}
                              <i class="fas fa-arrow-right"></i>Rs.
                              {(suggestedSuit && suggestedSuit.price * 80) /
                                100}
                            </p>
                          </Col>
                          <Col lg={{ size: 3 }} className="text-right">
                            <button className="m-1 card-btn" size="sm">
                              <i className="fas fa-heart"></i>
                            </button>
                            <button className="m-1 card-btn" size="sm">
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              ) : null}
            </CardBody>
          </Card>
        </Container>
        <DiscountComp />
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

export default connect(mapStateToProps, mapDispatchToProps)(WomenProductDetail);
