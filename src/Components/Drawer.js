import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});
const navTopBtn = {
  border: "none",
  background: "#008060",
  color: "white",
};
export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="primary-bg-cust "
        style={{ maxHeight: "100%", overflowY: "auto" }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
          return (
            <Card className="primary-bg-cust primary-cust-text">
              <CardBody>
                <Row>
                  <Col xs={{ size: 4 }}>
                    <img
                      width="100%"
                      height="150px"
                      src="https://placedog.net/900/900"
                    ></img>
                  </Col>
                  <Col xs={{ size: 8 }}>
                    <p>
                      <b>Product Name</b>
                    </p>
                    <p>$146</p>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Input
                          size="sm"
                          type="button"
                          value="-"
                          className="primary-bg-cust primary-cust-text"
                        />
                      </InputGroupAddon>
                      <Input
                        size="sm"
                        type="number"
                        readOnly
                        className="secondary-bg-cust primary-cust-text"
                      />
                      <InputGroupAddon addonType="append" value={1}>
                        <Input
                          size="sm"
                          type="button"
                          value="+"
                          className="primary-bg-cust primary-cust-text"
                        />
                      </InputGroupAddon>
                    </InputGroup>
                    <div className="text-right">
                      <button className="mt-3 card-btn cart-btn" size="sm">
                        Remove <i class="fas fa-minus-circle"></i>
                      </button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          );
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
                <b>$149 </b>
              </h5>
            </Col>
            <Col>
              <br />
              <button className="mt-3 card-btn checkout-btn" size="sm">
                Place Order&nbsp;
                <i class="fas fa-clipboard-check"></i>
              </button>
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
          <button
            className="m-2 nav-top-btn"
            size="sm"
            onClick={toggleDrawer(anchor, true)}
          >
            {" "}
            <i className="fas fa-shopping-cart"></i>
          </button>
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
