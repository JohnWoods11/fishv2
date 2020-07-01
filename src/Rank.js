import React from "react";
import styles from "./rank.module.css";

function Rank(props) {
  let totalPoints = props.points.reduce((a, b) => a + b, 0);
  let averagePoints = totalPoints / props.points.length;
  return (
    <div className={styles.rankings}>
      <h4>{props.type}</h4>
      {props.points.map((points, index) => (
        <div className={styles.rank}>
          {props.nameArray[index] ? props.nameArray[index] : "Not recorded"} :{" "}
          {((points / totalPoints) * 100).toFixed(1) -
            ((averagePoints / totalPoints) * 100).toFixed(1) >
          0
            ? `+${(
                ((points / totalPoints) * 100).toFixed(1) -
                ((averagePoints / totalPoints) * 100).toFixed(1)
              ).toFixed(1)}`
            : (
                ((points / totalPoints) * 100).toFixed(1) -
                ((averagePoints / totalPoints) * 100).toFixed(1)
              ).toFixed(1)}
          %
        </div>
      ))}
    </div>
  );
}

export default Rank;
