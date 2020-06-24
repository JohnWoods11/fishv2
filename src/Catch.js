import React from "react";
import styles from "./catch.module.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownItem from "react-bootstrap/DropdownItem";

function Catch(props) {
  const changeSpecies = (species) => {
    props.changeSpecies(species);
  };
  return (
    <div className={styles.container}>
      <DropdownButton
        as={ButtonGroup}
        variant="primary"
        title={
          props.currentSession.currentCast.species
            ? props.currentSession.currentCast.species
            : "NO SPECIES"
        }
      >
        {props.species.map((species, index) => (
          <DropdownItem
            eventKey={index}
            onClick={() => {
              changeSpecies(species);
            }}
          >
            {species}
          </DropdownItem>
        ))}
      </DropdownButton>
    </div>
  );
}

export default Catch;
