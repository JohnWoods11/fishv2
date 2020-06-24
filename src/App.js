import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Lakes from "./Lakes";
import Session from "./Session";
import Catch from "./Catch";

//date to be stored as utc string and parsed on use due to localstrorage corrupting date objects stored directly

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lakes: [{ name: "Holton", name: "Alderby" }],
      castHistory: [],
      fishHistory: [],
      species: ["Roach", "Pike", "Carp", "Perch"],
      baits: ["Maggot", "Corn"],
      styles: ["Ledger", "Float"],
      currentSession: null,
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home currentSession={this.state.currentSession}></Home>
            )}
          ></Route>
        </Switch>
        <Switch>
          <Route
            path="/fish/lakes"
            exact
            render={(props) => (
              <Lakes
                lakes={this.state.lakes}
                addLake={this.addLake}
                editLake={this.editLake}
                deleteLake={this.deleteLake}
                startSession={this.startSession}
                currentSession={this.state.currentSession}
              ></Lakes>
            )}
          ></Route>
        </Switch>
        <Switch>
          <Route
            path="/fish/session"
            render={(props) => (
              <Session
                lakes={this.state.lakes}
                currentSession={this.state.currentSession}
                baits={this.state.baits}
                styles={this.state.styles}
                endSession={this.endSession}
                cast={this.cast}
                endCast={this.endCast}
                addBite={this.addBite}
                recordReelIn={this.recordReelIn}
                changeBait={this.changeBait}
                changeStyle={this.changeStyle}
              ></Session>
            )}
          ></Route>
        </Switch>
        <Switch>
          <Route
            path="/fish/catch"
            render={(props) => (
              <Catch
                currentSession={this.state.currentSession}
                species={this.state.species}
                changeSpecies={this.changeSpecies}
              ></Catch>
            )}
          ></Route>
        </Switch>
      </Router>
    );
  }

  componentDidMount() {
    if (localStorage.getItem("currentSession")) {
      let savedSession = localStorage.getItem("currentSession");
      savedSession = JSON.parse(savedSession);
      this.setState({ currentSession: savedSession });
    }

    if (localStorage.getItem("lakes")) {
      let savedLakes = localStorage.getItem("lakes");
      savedLakes = JSON.parse(savedLakes);
      this.setState({ lakes: savedLakes });
    }
  }

  //lake management
  addLake = () => {
    let newLakeName = window.prompt("Lake:", "");
    //take user input
    if (newLakeName) {
      let newLake = { name: newLakeName };
      //initialize lake
      let newLakes = [...this.state.lakes];
      newLakes.push(newLake);
      this.setState(
        { lakes: newLakes },
        localStorage.setItem("lakes", JSON.stringify(newLakes))
      );
      //add lake to state
    }
  };

  editLake = (index) => {
    let newLakeName = window.prompt("Lake:", "");
    //take userinput
    if (newLakeName) {
      let editedLake = { name: newLakeName };
      //update lake
      let newLakes = [...this.state.lakes];
      newLakes[index] = editedLake;
      this.setState(
        { lakes: newLakes },
        localStorage.setItem("lakes", JSON.stringify(newLakes))
      );
      //update lake state
    }
  };

  deleteLake = (index) => {
    //prompt user
    //delete lake
    if (window.confirm("Delete this lake?")) {
      let newLakes = this.state.lakes;
      newLakes.splice(index, 1);
      this.setState(
        { lakes: newLakes },
        localStorage.setItem("lakes", JSON.stringify(newLakes))
      );
    }
  };

  startSession = (index) => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession = {
      lakeIndex: index,
      casting: false,
      casts: 0,
      bait: null,
      style: null,
      currentCast: {
        castTime: null,
        reelInTime: null,
        bites: 0,
        species: null,
        weight: null,
      },
      castHistory: [],
      fishHistory: [],
    };
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };

  endSession = () => {
    let newCastHistory = [...this.state.castHistory];
    let newFishHistory = [...this.state.fishHistory];
    newCastHistory = newCastHistory.concat(
      this.state.currentSession.castHistory
    );
    newFishHistory = newFishHistory.concat(
      this.state.currentSession.fishHistory
    );
    this.setState(
      {
        castHistory: newCastHistory,
        fishHistory: newFishHistory,
        currentSession: null,
      },
      localStorage.setItem(
        "castHistory",
        JSON.stringify(newCastHistory),
        localStorage.setItem("fishHistory", JSON.stringify(newFishHistory))
      )
    );
  };

  //casting screen
  cast = () => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession.casting = true;
    newCurrentSession.casts++;
    let castTime = new Date();
    newCurrentSession.currentCast.castTime = castTime.getTime();
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };
  //set state to casting
  //start cast data collection

  recordReelIn = () => {
    let newCurrentSession = this.state.currentSession;
    let reelInTime = new Date();
    newCurrentSession.currentCast.reelInTime = reelInTime.getTime();
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };

  recordCatchSuccess = () => {};
  //update cast history and fish history
  //this.endCast

  recordCatchFail = () => {
    let cast = this.state.currentSession.currentCast;
    cast.duration = cast.reelInTime - cast.castTime;
    cast.lakeName = this.state.lakes[
      this.state.currentSession.lakeIndex
    ].lakeName;
  }; //update cast history
  //this.endCast

  endCast = () => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession.casting = false;
    newCurrentSession.currentCast.castTime = null;
    newCurrentSession.currentCast.bites = 0;
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };

  addBite = () => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession.currentCast.bites++;
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };

  changeBait = (bait) => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession.bait = bait;
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };

  changeStyle = (style) => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession.style = style;
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };

  changeSpecies = (species) => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession.currentCast.species = species;
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };
}
export default App;
