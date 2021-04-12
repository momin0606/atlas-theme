import React, { Component } from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import DiscountComp from "../Components/DiscountComp";

const images = [900, 800, 700, 600, 500].map((size) => ({
  src: `https://placedog.net/${size}/${size}`,
}));

export class BedsheetProductDetail extends Component {
  render() {
    return (
      <>
        <Container className="pt-5">
          <Card className="mt-5">
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
                  <h2>Product Name</h2>
                  <h5>
                    <b>$149</b>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the
                  </p>
                  <Input type="Submit" value="Add To Cart" />
                  <Input type="Submit" value="Add To Fav" />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col lg={{ size: 6 }}>
                  <h5>You May Also Like</h5>
                  <Card>
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
                        <Col lg={{ size: 3 }}>
                          <Input type="Submit" value="Add To Cart" />
                          <Input type="Submit" value="Add To Fav" />
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

export default BedsheetProductDetail;
