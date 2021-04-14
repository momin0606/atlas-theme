import React, { Component } from "react";
import { Button, Col, Container, Form, Input, Row } from "reactstrap";
import DiscountComp from "../Components/DiscountComp";

export class ContactUs extends Component {
  render() {
    return (
      <>
        <div style={{ minHeight: "8vh" }}></div>
        <Container>
          <h3 className="text-center">Contact Us</h3>
          <Row>
            <Col className="pt-5" lg={{ size: 8 }}>
              <h4>*You can also contact us on our social media accounts*</h4>
              <p className="mt-3 gold-text-cust">
                <i className="fab fa-facebook"></i>&nbsp;Facebook.com/page_id
              </p>
              <p className="mt-3 gold-text-cust">
                <i className="fab fa-instagram"></i>
                &nbsp;Instagram.com/page_id
              </p>
              <p className="mt-3 gold-text-cust">
                <i className="fab fa-whatsapp"></i>&nbsp;Whatsapp Number
              </p>
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
                <button className="ml-2 nav-top-btn">Submit</button>
              </Form>
            </Col>
          </Row>
        </Container>
        <DiscountComp />
      </>
    );
  }
}

export default ContactUs;
