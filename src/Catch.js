import React from "react";
import styles from "./catch.module.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownItem from "react-bootstrap/DropdownItem";
import Form from "react-bootstrap/Form";
import { Redirect } from "react-router-dom";

class Catch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catch: {
        lakeIndex: null,
        castTime: null,
        catchTime: null,
        species: null,
        weight: null,
        bait: null,
        style: null,
      },
      toSession: false,
    };
  }

  componentDidMount() {
    if (this.props.currentSession) {
      let thisCatch = this.state.catch;
      thisCatch.lakeIndex = this.props.currentSession.lakeIndex;
      thisCatch.castTime = this.props.currentSession.currentCast.castTime;
      thisCatch.catchTime = this.props.currentSession.currentCast.reelInTime;
      thisCatch.bait = this.props.currentSession.bait;
      thisCatch.style = this.props.currentSession.style;
      this.setState({ catch: thisCatch });
    }
  }

  changeSpecies = (newSpecies) => {
    let newCatch = this.state.catch;
    newCatch.species = newSpecies;
    this.setState({ catch: newCatch });
  };

  changeWeight = (event) => {
    let newCatch = this.state.catch;
    newCatch.weight = event.target.value;
    this.setState({ catch: newCatch });
  };

  addCatch = () => {
    this.props.recordCatchSuccess(
      this.state.catch.species,
      this.state.catch.weight
    );
    this.props.endCast();
    this.setState({ toSession: true });
  };

  render() {
    if (!this.props.currentSession) {
      return <Redirect to="/fishv2/"></Redirect>;
    }

    if (this.state.toSession) {
      return <Redirect to="/fishv2/session"></Redirect>;
    }

    return (
      <div className={styles.container}>
        <DropdownButton
          size="lg"
          className={styles.species}
          as={ButtonGroup}
          variant="primary"
          title={
            this.state.catch.species ? this.state.catch.species : "NO SPECIES"
          }
        >
          {this.props.species.map((species, index) => (
            <DropdownItem
              eventKey={index}
              onClick={() => {
                this.changeSpecies(species);
              }}
            >
              {species}
            </DropdownItem>
          ))}
        </DropdownButton>

        <Form className={styles.weight}>
          <Form.Group controlId="weightRange">
            <Form.Label>
              {this.state.catch.weight
                ? this.props.kilosToPoundsReadable(this.state.catch.weight)
                : "NO WEIGHT RECORDED"}
            </Form.Label>
            <Form.Control
              type="range"
              min="0"
              max="20"
              step="0.028349"
              onChange={this.changeWeight}
              value={this.state.catch.weight}
            ></Form.Control>
          </Form.Group>
        </Form>

        <div className={styles.catchStats}>
          <div className={styles.statsPair}>
            <div>
              {this.state.catch.lakeIndex !== null
                ? this.props.lakes[this.state.catch.lakeIndex].name
                : "NA"}
            </div>
            <div>
              {" "}
              {this.props
                .mSToDate(this.state.catch.catchTime)
                .toLocaleDateString()}
            </div>
          </div>
          <div className={styles.statsPair}>
            Cast time:{" "}
            <div>
              {this.props
                .mSToDate(this.state.catch.castTime)
                .toLocaleTimeString()}
            </div>
          </div>
          <div className={styles.statsPair}>
            Catch Time:{" "}
            <div>
              {this.props
                .mSToDate(this.state.catch.catchTime)
                .toLocaleTimeString()}{" "}
            </div>
          </div>
          <div className={styles.statsPair}>
            Species:{" "}
            <div>
              {this.state.catch.species ? this.state.catch.species : "NA"}
            </div>
          </div>
          <div className={styles.statsPair}>
            Weight:{" "}
            <div>
              {this.state.catch.weight ? this.state.catch.weight : "NA"}
            </div>
          </div>
          <div className={styles.statsPair}>
            Bait:{" "}
            <div>{this.state.catch.bait ? this.state.catch.bait : "NA"}</div>
          </div>
          <div className={styles.statsPair}>
            Style:{" "}
            <div>{this.state.catch.style ? this.state.catch.style : "NA"}</div>
          </div>
        </div>
        <Button
          variant="success"
          size="lg"
          className={styles.recordButton}
          onClick={this.addCatch}
        >
          ADD CATCH
        </Button>
      </div>
    );
  }
}

export default Catch;
