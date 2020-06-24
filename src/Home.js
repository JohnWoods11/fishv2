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
    return <Redirect to="/fish/session"></Redirect>;
  }

  return (
    <div className={styles.container}>
      <Link to="/fish/lakes">
        <Button size="lg">Lakes</Button>
      </Link>

      <Link to="/fish/stats">
        <Button size="lg">Statistics</Button>
      </Link>

      <Button
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
