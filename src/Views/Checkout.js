import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";

export class Checkout extends Component {
  render() {
    return (
      <>
        <div style={{ minHeight: "8vh" }}></div>

        <h3 className="text-center">Checkout</h3>
        <Container>
          <Card>
            <CardBody>
              <Row>
                <Col style={{ minHeight: "60vh" }}>
                  <Form className="p-2">
                    <Input className="m-2" placeholder="First Name" />
                    <Input className="m-2" placeholder="Last Name" />
                    <Input className="m-2" placeholder="Email" />
                    <Input className="m-2" placeholder="Phone No." />
                    <Input className="m-2" placeholder="Address" />
                    <Input className="m-2" placeholder="City" />
                    <p className="text-danger">
                      **All Orders Can Be Replaced or Canceled within 14 days
                      after delivery (Return Policy)
                      <br />
                      **Delivery can take 4 to 10 days
                      <br /> **Damaged or Used Products will not be Replaced or
                      Refunded
                    </p>
                    <Row>
                      <Col className="text-right p-0">
                        <Button className="m-2">Place Order</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col className="pl-2 pr-2">
                  <div
                    style={{
                      maxHeight: "60vh",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                      return (
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs={{ size: 2 }}>
                                <img
                                  width="100%"
                                  src="https://placedog.net/900/900"
                                ></img>
                              </Col>
                              <Col xs={{ size: 10 }}>
                                <Row>
                                  <Col>
                                    <p>
                                      <b>Product Name</b>
                                    </p>
                                    <p>$146</p>
                                  </Col>
                                  <Col>
                                    <p>Quantity:4</p>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      );
                    })}
                  </div>
                  <hr />
                  <Row>
                    <Col>
                      <h5>Total :</h5>
                    </Col>
                    <Col className="text-right">
                      <h5> $149</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

export default Checkout;
