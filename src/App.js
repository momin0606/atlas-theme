import { Component } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import WomenCollection from "./Views/WomenCollection";
import BedsheetsPage from "./Views/Bedsheets";
import ContactUs from "./Views/ContactUs";
import Favorites from "./Views/Favorites";
import WomenProductDetail from "./Views/WomenProductDetail";
import BedsheetProductDetail from "./Views/BedsheetProductDetail";
import Checkout from "./Views/Checkout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Header />
            <div className="main-div" style={{ marginTop: "5%" }}>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/womencollection"
                component={WomenCollection}
              />
              <Route
                exact
                path="/womencollection/:id"
                component={WomenProductDetail}
              />
              <Route exact path="/bedsheets" component={BedsheetsPage} />
              <Route
                exact
                path="/bedsheets/:id"
                component={BedsheetProductDetail}
              />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/favorites" component={Favorites} />
              <Route exact path="/checkout" component={Checkout} />
            </div>
            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
