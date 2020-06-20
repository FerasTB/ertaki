import React, { Component } from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Default from "./components/Layout/Default";
import Home from "./components/Home";
import Loading from "./components/Layout/Loading";
import Loginteacher from "./components/Loginteacher";
import Loginstudent from "./components/Loginstudent";
import Courses from "./components/Courses";
import { ProductProvider, ProductConsumer } from './context';
class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <Navbar />
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/loginstudent" component={Loginstudent} />
              <Route path="/loginteacher" component={Loginteacher} />
              <Route path="/courses" component={Courses} />
              <Route component={Default} />
            </Switch>
            
            <Footer />
            <ScrollUpButton />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
