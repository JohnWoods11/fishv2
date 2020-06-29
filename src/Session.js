import React, { useState } from "react";
import styles from "./session.module.css";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Session(props) {
  const [toHome, setToHome] = useState(false);
  const [toCatch, setToCatch] = useState(false);

  const endSession = () => {
    setToHome(true);
    props.endSession();
  };

  const cast = () => {
    props.cast();
  };

  const endCast = () => {
    props.recordReelIn();
    props.recordCatchFail();
    props.endCast();
  };

  const addBite = () => {
    if (props.currentSession.casting) {
      props.addBite();
    }
  };

  const changeBait = (bait) => {
    props.changeBait(bait);
  };

  const changeStyle = (style) => {
    props.changeStyle(style);
  };

  const recordCatchDetails = () => {
    if (props.currentSession.casting) {
      props.recordReelIn();
      setToCatch(true);
    }
  };

  if (toHome) {
    return <Redirect to="/fishv2/"></Redirect>;
  }
  if (toCatch) {
    return <Redirect to="/fishv2/catch"></Redirect>;
  }

  return props.currentSession ? (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          {props.lakes[props.currentSession.lakeIndex].name}{" "}
        </div>
        <div
          className={styles.castInfo}
          onClick={props.currentSession.casting === false ? cast : null}
        >
          {props.currentSession.casting === true ? (
            <div>
              {props.currentSession.casts}{" "}
              {props.currentSession.currentCast.bites}
            </div>
          ) : (
            "CAST"
          )}
        </div>{" "}
        <div className={styles.castingOptions}>
          <DropdownButton
            as={ButtonGroup}
            variant="info"
            title={
              props.currentSession.bait ? props.currentSession.bait : "NO BAIT"
            }
          >
            {props.baits.map((bait, index) => (
              <Dropdown.Item
                eventKey={index}
                onClick={() => {
                  changeBait(bait);
                }}
              >
                {bait}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            variant="info"
            title={
              props.currentSession.style
                ? props.currentSession.style
                : "NO STYLE"
            }
          >
            {props.styles.map((style, index) => (
              <Dropdown.Item
                eventKey={index}
                onClick={() => {
                  changeStyle(style);
                }}
              >
                {style}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div className={styles.verticalButtons}>
          <Button
            className={styles.catchButton}
            variant="success"
            size="lg"
            onClick={recordCatchDetails}
          >
            FISH LANDED
          </Button>{" "}
          <div className={styles.horizontalButtons}>
            <Button
              className={styles.otherButton}
              variant="primary"
              onClick={addBite}
            >
              BITE OR RUN
            </Button>{" "}
            <Button
              className={styles.otherButton}
              variant={props.currentSession.casting ? "info" : "danger"}
              onClick={props.currentSession.casting ? endCast : endSession}
            >
              {props.currentSession.casting ? "END CAST" : "END SESSION"}
            </Button>
          </div>
        </div>
      </div>
      <Link to="/fishv2/">
        <Button className={styles.backButton}>Back</Button>
      </Link>
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
}

export default Session;
