import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./lakes.module.css";
import { Redirect, Link } from "react-router-dom";

function Lakes(props) {
  const [toSession, setToSession] = useState(false);

  const addLake = (event) => {
    props.addLake();
    event.stopPropagation();
  };

  const editLake = (event, index) => {
    props.editLake(index);
    event.stopPropagation();
  };

  const deleteLake = (index) => {
    props.deleteLake(index);
  };

  const startSession = (event, index) => {
    if (!props.currentSession) {
      props.startSession(index);
      setToSession(true);
    } else {
      event.stopPropagation();
    }
    //implement end current session
  };

  if (toSession) {
    return <Redirect to="/fishv2/session"></Redirect>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.accordionContainer}>
        <Accordion defaultActiveKey="0">
          {props.lakes.map((lake, index) => (
            <Card Key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={index}>
                <div className={styles.lakeHeader}>
                  {lake.name}
                  <div>
                    <Button
                      variant="success"
                      sz="lg"
                      onClick={(event) => {
                        startSession(event, index);
                      }}
                    >
                      Fish
                    </Button>
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  <div className={styles.lakeBody}>
                    Stats here some time
                    <div className={styles.bodyButtons}>
                      <Button
                        variant="primary"
                        sz="lg"
                        onClick={(event) => editLake(event, index)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteLake(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={props.lakes.length}>
              <div className={styles.lakeHeader}>
                Add a lake
                <div>
                  <Button
                    variant="primary"
                    sz="lg"
                    onClick={(event) => addLake(event)}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </Accordion.Toggle>
          </Card>
        </Accordion>
      </div>
      <Link to="/fishv2/">
        <Button className={styles.backButton} variant="primary">
          Back
        </Button>
      </Link>
    </div>
  );
}

export default Lakes;
