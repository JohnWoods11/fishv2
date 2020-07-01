import React from "react";
import styles from "./rankings.module.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import Rank from "./Rank";

function Rankings(props) {
  return (
    <div className={styles.container}>
      <DropdownButton
        as={ButtonGroup}
        variant="info"
        title={
          props.lakeIndexFilter !== null
            ? props.lakes[props.lakeIndexFilter].name
            : "All lakes"
        }
      >
        <Dropdown.Item
          eventKey={0}
          onClick={() => {
            props.setLakeFilter(null);
          }}
        >
          All lakes
        </Dropdown.Item>
        {props.lakes.map((lake, index) => (
          <Dropdown.Item
            eventKey={index + 1}
            onClick={() => {
              props.setLakeFilter(index);
            }}
          >
            {lake.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        variant="info"
        title={props.baitFilter !== null ? props.baitFilter : "All baits"}
      >
        <Dropdown.Item
          eventKey={0}
          onClick={() => {
            props.setBaitFilter(null);
          }}
        >
          All baits
        </Dropdown.Item>
        {props.baits.map((bait, index) => (
          <Dropdown.Item
            eventKey={index + 1}
            onClick={() => {
              props.setBaitFilter(bait);
            }}
          >
            {bait}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant="info"
        title={props.styleFilter !== null ? props.styleFilter : "All styles"}
      >
        <Dropdown.Item
          eventKey={0}
          onClick={() => {
            props.setStyleFilter(null);
          }}
        >
          All styles
        </Dropdown.Item>
        {props.styles.map((style, index) => (
          <Dropdown.Item
            eventKey={index + 1}
            onClick={() => {
              props.setStyleFilter(style);
            }}
          >
            {style}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <div className={styles.rankingsContainer}>
        <Rank
          points={props.baitUsage}
          type="Bait"
          nameArray={props.baits}
        ></Rank>
        <Rank
          points={props.styleUsage}
          type="Style"
          nameArray={props.styles}
        ></Rank>
        <Rank
          points={props.catchSpecies}
          type="Species"
          nameArray={props.species}
        ></Rank>
      </div>
    </div>
  );
}

export default Rankings;
