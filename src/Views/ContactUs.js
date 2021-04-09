import React, { Component } from "react";
import { Button, Col, Container, Form, Input, Row } from "reactstrap";

export class ContactUs extends Component {
  render() {
    return (
      <>
        <div style={{ minHeight: "8vh" }}></div>
        <Container>
          <h3 className="text-center">Contact Us</h3>
          <Row>
            <Col lg={{ size: 8 }}>
              <p>Facebook.com/page_id</p>
              <p>Instagram.com/page_id</p>
              <p>Whatsapp Number</p>
            </Col>
            <Col lg={{ size: 4 }}>
              <h3 className="mt-3 mb-3 ml-4">Send us a message here</h3>
              <Form className="p-2">
                <Input className="m-2 mr-3" placeholder="Name" />
                <Input className="m-2 mr-3" placeholder="Email" />
                <Input
                  className="m-2 mr-3"
                  placeholder="Message"
                  type="textarea"
                />
                <Button className="ml-2">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Row className="mt-5 mb-5 mr-0 ml-0" style={{ width: "100%" }}>
          <Col className="p-0">
            <img
              width="100%"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Card image cap"
            ></img>
          </Col>
          <Col className="p-0 text-center" style={{ background: "#dcdcdc" }}>
            <h3 className="mt-5">Launch Sale!</h3>
            <p>Flat 20% off on all products with free shipping</p>
            <p className="mt-5">
              Use Promo Code <b>LAUNCH20</b> at check out to get 20% off
            </p>
          </Col>
        </Row>
      </>
    );
  }
}

export default ContactUs;
