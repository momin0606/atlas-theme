import React, { Component } from "react";
import { Col, Row } from "reactstrap";

export class DiscountComp extends Component {
  render() {
    return (
      <>
        <Row className="mt-5 mb-5 mr-0 ml-0" style={{ width: "100%" }}>
          <Col className="p-0">
            <img
              width="100%"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Card image cap"
            ></img>
          </Col>
          <Col className="p-0 text-center home-col-2-bg">
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

export default DiscountComp;
