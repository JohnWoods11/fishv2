import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./home.module.css";

function Home(props) {
  const [toSession, setToSession] = useState(false);

  const toCurrentSession = () => {
    if (props.currentSession) {
      setToSession(true);
    }
  };

  if (toSession) {
    return <Redirect to="/fishv2/session"></Redirect>;
  }

  return (
    <div className={styles.container}>
      <Link to="/fishv2/lakes">
        <Button className={styles.button} size="lg">
          Lakes
        </Button>
      </Link>

      <Link to="/fishv2/stats">
        <Button className={styles.button} size="lg">
          Statistics
        </Button>
      </Link>

      <Button
        className={styles.button}
        size="lg"
        variant={props.currentSession ? "primary" : "secondary"}
        onClick={toCurrentSession}
      >
        Session
      </Button>
    </div>
  );
}

export default Home;
