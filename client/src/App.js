import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdvancedSearch from "./pages/AdvancedSearch";
import Results from "./pages/Results"
import Nav from "./components/Nav";
import "./style.css"
import Footer from "./components/Footer"

class App extends Component {
  state = {
    searchResults: {},
  }

  handleInfo = (data) => {
    this.setState({
      searchResults: data,
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="content">

              <header>
                <Nav />
              </header>

            <Switch>
              <Route exact path="/" render={() => <AdvancedSearch handleInfo={this.handleInfo} />} />
              <Route exact path="/Results" render={() => <Results flightInfo={this.state.searchResults} />} />
            </Switch>
          </div>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
