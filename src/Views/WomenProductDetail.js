import React, { Component } from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import DiscountComp from "../Components/DiscountComp";

const images = [900, 800, 700, 600, 500].map((size) => ({
  src: `https://placedog.net/${size}/${size}`,
}));

export class WomenProductDetail extends Component {
  render() {
    return (
      <>
        <Container className="pt-5">
          <Card className="mt-5 primary-bg-cust primary-border">
            <CardBody>
              <Row>
                <Col>
                  <Carousel
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    className="shadow"
                    images={[...images]}
                  />
                </Col>
                <Col className="pl-2 pr-2">
                  <h2 className="mt-3 ml-3">Product Name</h2>
                  <h5 className="mt-3 ml-3">
                    <b>$149</b>
                  </h5>
                  <p className="mt-3 ml-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the
                  </p>
                  <button className="mt-3 card-btn checkout-btn" size="sm">
                    ADD TO FAVORITE&nbsp;<i className="fas fa-heart"></i>
                  </button>
                  <button className="mt-3 card-btn checkout-btn" size="sm">
                    ADD TO CART&nbsp;<i className="fas fa-shopping-cart"></i>
                  </button>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col lg={{ size: 6 }}>
                  <h5>You May Also Like</h5>
                  <Card className="primary-bg-cust primary-border">
                    <CardBody>
                      <Row>
                        <Col lg={{ size: 3 }}>
                          <img
                            width="100%"
                            src="https://placedog.net/900/900"
                          ></img>
                        </Col>
                        <Col lg={{ size: 6 }}>
                          <p>
                            <b>Product Name</b>
                          </p>
                          <p>$146</p>
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
            </CardBody>
          </Card>
        </Container>
        <DiscountComp />
      </>
    );
  }
}

export default WomenProductDetail;
