import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import Bedsheets from "../Components/Bedsheets";
import DiscountComp from "../Components/DiscountComp";
import { getBedSheets } from "../store/actions/bedsheetsActions";
import { getSuits } from "../store/actions/suitsActions";
export class BedsheetsPage extends Component {
  componentDidMount() {
    this.props.getSuits();
    this.props.getBedSheets();
  }
  render() {
    var { bedsheets } = this.props;
    return (
      <>
        <div style={{ minHeight: "3vh" }}></div>
        <Container>
          {bedsheets.length ? (
            <Bedsheets />
          ) : (
            <h3 className="mt-5">
              Bedsheets are currently out of stock, We will be in stock really
              soon!
            </h3>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(BedsheetsPage);
