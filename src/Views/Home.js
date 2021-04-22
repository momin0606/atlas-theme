import React, { Component } from "react";
import { Container, UncontrolledCarousel } from "reactstrap";
import Bedsheets from "../Components/Bedsheets";
import DiscountComp from "../Components/DiscountComp";
import Suits from "../Components/Suits";
import { connect } from "react-redux";
import { getSuits } from "../store/actions/suitsActions";
import { getBedSheets } from "../store/actions/bedsheetsActions";

export class Home extends Component {
  componentDidMount() {
    this.props.getSuits();
    this.props.getBedSheets();
  }
  render() {
    var { bedsheets } = this.props;
    return (
      <>
        <video
          className="video mt-4"
          src="/Women Collection.mp4"
          autoPlay
          loop
        />
        <Container>
          <Suits />
          {bedsheets.length ? <Bedsheets /> : null}
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
    bedsheets: state.bedsheets.bedsheets,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    getSuits: () => dispatch(getSuits()),
    getBedSheets: () => dispatch(getBedSheets()),
    // login: (credentials) => dispatch(login(credentials)),
    // register: (credentials, password) =>
    // dispatch(register(credentials, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
