import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Lakes from "./Lakes";
import Session from "./Session";
import Catch from "./Catch";
import Statistics from "./Statistics";

//date to be stored as utc string and parsed on use due to localstrorage corrupting date objects stored directly

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lakes: [{ name: "Holton", name: "Alderby" }],
      castHistory: [],

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
            path="/fishv2/"
            exact
            render={(props) => (
              <Home currentSession={this.state.currentSession}></Home>
            )}
          ></Route>
        </Switch>
        <Switch>
          <Route
            path="/fishv2/lakes"
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
            path="/fishv2/session"
            render={(props) => (
              <Session
                lakes={this.state.lakes}
                currentSession={this.state.currentSession}
                baits={this.state.baits}
                styles={this.state.styles}
                endSession={this.endSession}
                cast={this.cast}
                endCast={this.endCast}
                recordCatchFail={this.recordCatchFail}
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
            path="/fishv2/catch"
            render={(props) => (
              <Catch
                lakes={this.state.lakes}
                currentSession={this.state.currentSession}
                species={this.state.species}
                changeSpecies={this.changeSpecies}
                recordCatchSuccess={this.recordCatchSuccess}
                endCast={this.endCast}
                mSToDate={this.mSToDate}
                kilosToPoundsReadable={this.kilosToPoundsReadable}
              ></Catch>
            )}
          ></Route>
        </Switch>
        <Switch>
          <Route
            path="/fishv2/stats"
            render={(props) => (
              <Statistics
                castHistory={this.state.castHistory}
                lakes={this.state.lakes}
                baits={this.state.baits}
                styles={this.state.styles}
                species={this.state.species}
                mSToReadable={this.mSToReadable}
                kilosToPoundsReadable={this.kilosToPoundsReadable}
                mSToDate={this.mSToDate}
              ></Statistics>
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

    if (localStorage.getItem("castHistory")) {
      let savedCastHistory = localStorage.getItem("castHistory");
      savedCastHistory = JSON.parse(savedCastHistory);
      this.setState({ castHistory: savedCastHistory });
    }

    if (localStorage.getItem("baits")) {
      let savedBaits = localStorage.getItem("baits");
      savedBaits = JSON.parse(savedBaits);
      this.setState({ baits: savedBaits });
    }

    if (localStorage.getItem("styles")) {
      let savedStyles = localStorage.getItem("styles");
      savedStyles = JSON.parse(savedStyles);
      this.setState({ styles: savedStyles });
    }

    if (localStorage.getItem("species")) {
      let savedSpecies = localStorage.getItem("species");
      savedSpecies = JSON.parse(savedSpecies);
      this.setState({ species: savedSpecies });
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
      catches: 0,
      castingDuration: 0,
      bait: null,
      style: null,
      currentCast: {
        catchSuccess: null,
        castTime: null,
        reelInTime: null,
        bites: 0,
      },
      castHistory: [],
    };
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };

  endSession = () => {
    let newCastHistory = [...this.state.castHistory];
    newCastHistory = newCastHistory.concat(
      this.state.currentSession.castHistory
    );
    let newCurrentSession = this.state,
      currentSession;
    newCurrentSession = null;

    this.setState(
      {
        castHistory: newCastHistory,

        currentSession: newCurrentSession,
      },
      localStorage.setItem("castHistory", JSON.stringify(newCastHistory)),
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
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

  recordCatchSuccess = (recordedSpecies, recordedWeight) => {
    let cast = this.state.currentSession.currentCast;
    let thisBites = cast.bites + 1;
    let thisCastTime = cast.castTime;
    let thisReelInTime = cast.reelInTime;
    let thisDuration = cast.reelInTime - cast.castTime;
    let thisLakeName = this.state.lakes[this.state.currentSession.lakeIndex]
      .name;
    let thisLakeIndex = this.state.currentSession.lakeIndex;
    let thisBait = this.state.currentSession.bait;
    let thisStyle = this.state.currentSession.style;
    let thisSpecies = recordedSpecies;
    let thisWeight = recordedWeight;
    let thisCatchSuccess = true;
    let thisCast = {
      bites: thisBites,
      castTime: thisCastTime,
      reelInTime: thisReelInTime,
      duration: thisDuration,
      lakeName: thisLakeName,
      lakeIndex: thisLakeIndex,
      bait: thisBait,
      style: thisStyle,
      species: thisSpecies,
      weight: thisWeight,
      catchSuccess: thisCatchSuccess,
    };

    let newCurrentSession = this.state.currentSession;
    newCurrentSession.castHistory.push(thisCast);
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  };
  //update cast history and fish history
  //this.endCast

  recordCatchFail = () => {
    let cast = this.state.currentSession.currentCast;
    let thisBites = cast.bites;
    let thisCastTime = cast.castTime;
    let thisReelInTime = cast.reelInTime;
    let thisDuration = cast.reelInTime - cast.castTime;
    let thisLakeName = this.state.lakes[this.state.currentSession.lakeIndex]
      .name;
    let thisLakeIndex = this.state.currentSession.lakeIndex;
    let thisBait = this.state.currentSession.bait;
    let thisStyle = this.state.currentSession.style;
    let thisCatchSuccess = false;
    let thisCast = {
      bites: thisBites,
      castTime: thisCastTime,
      reelInTime: thisReelInTime,
      duration: thisDuration,
      lakeName: thisLakeName,
      lakeIndex: thisLakeIndex,
      bait: thisBait,
      style: thisStyle,
      catchSuccess: thisCatchSuccess,
    };

    let newCurrentSession = this.state.currentSession;
    newCurrentSession.castHistory.push(thisCast);
    this.setState(
      { currentSession: newCurrentSession },
      localStorage.setItem("currentSession", JSON.stringify(newCurrentSession))
    );
  }; //update cast history
  //this.endCast

  endCast = () => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession.casting = false;

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

  mSToDate = (milliseconds) => {
    let date = new Date();
    date.setTime(milliseconds);
    return date;
  };

  mSToReadable = (milliseconds) => {
    let seconds = (milliseconds / 1000) % 60;
    let secondsNoDecimal = seconds.toFixed();
    let minutes = ((milliseconds / 1000 - seconds) / 60) % 60;
    let hours = ((milliseconds / 1000 - seconds) / 60 - minutes) / 60;

    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${secondsNoDecimal < 10 ? `0${secondsNoDecimal}` : secondsNoDecimal}`;
  };

  kilosToPoundsReadable = (weight) => {
    let weightOunces = weight / 0.028349;
    let remainOunces = weightOunces % 16;
    let pounds = (weightOunces - remainOunces) / 16;
    return `${pounds} lbs ${remainOunces.toFixed(0)} ounces`;
  };
}
export default App;
