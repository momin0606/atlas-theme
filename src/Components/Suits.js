import React, { Component } from "react";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { getSuits } from "../store/actions/suitsActions";
import { connect } from "react-redux";
export class Suits extends Component {
  componentDidMount() {
    this.props.getSuits();
  }
  render() {
    var { suits } = this.props;
    console.log(suits);
    return (
      <>
        <h3 className="mt-5 mb-3">3pc Suits</h3>
        <Row>
          {suits &&
            suits.map((suit) => {
              return (
                <Col lg={{ size: 3 }} className="mt-2">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      // style={{ height: "40vh" }}
                      src={suit.images[0]}
                      alt="3PC suit"
                    />
                    <CardBody className="home-col-2-bg">
                      <p className="m-0">
                        <b>{suit.description}</b>
                      </p>
                      <p className="m-0">
                        <del>Rs.{suit.price}</del>{" "}
                        <i class="fas fa-arrow-right"></i>Rs.
                        {(suit.price * 80) / 100}
                      </p>
                      <p className="m-0">Stock: {suit.stock}</p>
                      <Row>
                        <Col className="text-center">
                          <button className="m-2 card-btn" size="sm">
                            <i className="fas fa-heart"></i>
                          </button>
                          <button className="m-2 card-btn" size="sm">
                            <i className="fas fa-shopping-cart"></i>
                          </button>
                          <button className="m-2 card-btn" size="sm">
                            <i className="fas fa-eye"></i>
                          </button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          <Col lg={{ size: 3 }}>
            <Card>
              <CardImg
                top
                width="100%"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Card image cap"
              />
              <CardBody className="home-col-2-bg">
                <p>
                  Some description etc askjdkas dajksd kajsd kasjd kasd kasjd
                </p>
                <Row>
                  <Col className="text-center">
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-eye"></i>
                    </button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={{ size: 3 }}>
            <Card>
              <CardImg
                top
                width="100%"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Card image cap"
              />
              <CardBody className="home-col-2-bg">
                <p>
                  Some description etc askjdkas dajksd kajsd kasjd kasd kasjd
                </p>
                <Row>
                  <Col className="text-center">
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-eye"></i>
                    </button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={{ size: 3 }}>
            <Card>
              <CardImg
                top
                width="100%"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Card image cap"
              />
              <CardBody className="home-col-2-bg">
                <p>
                  Some description etc askjdkas dajksd kajsd kasjd kasd kasjd
                </p>
                <Row>
                  <Col className="text-center">
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="m-2 card-btn" size="sm">
                      <i className="fas fa-eye"></i>
                    </button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
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
    // login: (credentials) => dispatch(login(credentials)),
    // register: (credentials, password) =>
    // dispatch(register(credentials, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Suits);
