import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import {
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import { getSuits } from "../store/actions/suitsActions";
import {
  addQuantity,
  removeFromCart,
  subQuantity,
  updateCart,
} from "../store/actions/cartActions";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

function TemporaryDrawer(props) {
  // console.log(props);
  useEffect(() => {
    props.updateCart();
    props.getSuits();
  }, []);
  var { cart, suits } = props;
  var cartSuits =
    cart.length &&
    suits &&
    suits.filter((item) => {
      return cart.map((suit) => {
        return suit.id == item.id;
      });
    });
  var total =
    cartSuits &&
    cart.length &&
    cartSuits.reduce((acc, val) => {
      console.log(val.id);
      var thisQuantity =
        cart.find((cartItem) => cartItem.id == val.id) &&
        cart.find((cartItem) => {
          console.log(
            cartItem.id == val.id,
            cartItem.id,
            val.id,
            cartItem.quantity
          );
          return cartItem.id == val.id;
        }).quantity;
      if (thisQuantity) {
        return (acc = acc + val.price * thisQuantity);
      } else {
        return (acc = acc + 0);
      }
    }, 0);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={"primary-bg-cust"}
      style={{ width: "300px" }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="primary-bg-cust "
        style={{ maxHeight: "100%", overflowY: "auto" }}
      >
        {cart.map((item) => {
          var thisSuit = suits && suits.find((suit) => suit.id == item.id);
          if (thisSuit)
            return (
              <Card className="primary-bg-cust primary-cust-text">
                <CardBody>
                  <Row>
                    <Col xs={{ size: 4 }}>
                      <img
                        width="100%"
                        height="150px"
                        src={thisSuit.images[0]}
                      ></img>
                    </Col>
                    <Col xs={{ size: 8 }}>
                      <p>
                        <b>{thisSuit.name}</b>
                      </p>
                      <p>Rs.&nbsp;{thisSuit.price}</p>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <Input
                            size="sm"
                            type="button"
                            value="-"
                            disabled={item.quantity <= 1}
                            onClick={(e) => {
                              e.preventDefault();
                              props.subQuantity(item.id);
                            }}
                            className="primary-bg-cust primary-cust-text"
                          />
                        </InputGroupAddon>
                        <Input
                          size="sm"
                          type="number"
                          readOnly
                          value={item.quantity}
                          className="secondary-bg-cust primary-cust-text"
                        />
                        <InputGroupAddon addonType="append" value={1}>
                          <Input
                            size="sm"
                            type="button"
                            value="+"
                            disabled={item.quantity >= thisSuit.stock}
                            className="primary-bg-cust primary-cust-text"
                            onClick={(e) => {
                              e.preventDefault();
                              props.addQuantity(item.id);
                            }}
                          />
                        </InputGroupAddon>
                      </InputGroup>
                      <div className="text-right">
                        <button
                          className="mt-3 card-btn cart-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            props.removeFromCart({
                              id: item.id,
                            });
                          }}
                          size="sm"
                        >
                          Remove <i class="fas fa-minus-circle"></i>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            );
          else return null;
        })}
      </div>
      <Divider style={{ marginTop: "160px" }} />
      <Card
        className="primary-bg-cust primary-cust-text primary-border"
        style={{
          position: "fixed",
          bottom: "0",
          width: "300px",
          borderRadius: "0",
        }}
      >
        <CardBody>
          <Row>
            <Col xs={{ size: 6 }}>
              <h5>
                <b>Total : </b>
              </h5>
            </Col>{" "}
            <Col xs={{ size: 6 }} className="text-right">
              <h5>
                <b>Rs.{total}</b>
              </h5>
            </Col>
            <Col>
              <br />
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  toggleDrawer();
                  window.open("/checkout", "blank");
                }}
              >
                <button className="mt-3 card-btn checkout-btn" size="sm">
                  Place Order&nbsp;
                  <i class="fas fa-clipboard-check"></i>
                </button>
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Badge
            badgeContent={cart.length}
            // className="secondary-bg-cust gold-text-cust"
            color="primary"
          >
            <button
              className="m-2 nav-top-btn"
              size="sm"
              onClick={toggleDrawer(anchor, true)}
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
          </Badge>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
export function mapStateToProps(state) {
  return {
    uid: state.auth.uid,
    loading: state.auth.requested,
    registered: state.auth.registered,
    suits: state.suits.suits,
    cart: state.cart.cart,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    getSuits: () => dispatch(getSuits()),
    removeFromCart: (cartItem) => dispatch(removeFromCart(cartItem)),
    addQuantity: (cartItem) => dispatch(addQuantity(cartItem)),
    subQuantity: (cartItem) => dispatch(subQuantity(cartItem)),
    updateCart: () => dispatch(updateCart()),
    // login: (credentials) => dispatch(login(credentials)),
    // register: (credentials, password) =>
    // dispatch(register(credentials, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);
