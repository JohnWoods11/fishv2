import React, { useState } from "react";
import styles from "./statistics.module.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import Rankings from "./Rankings";

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleUsage: [],
      baitUsage: [],
      catchSpecies: [],
      daysOfYearArray: [],
      dayArray: [],
      filteredCastList: [],
      generalStats: {
        catchRate: null,
        timeCasted: null,
        bites: null,
        catches: null,
        heaviestCatch: null,
      },
      isCastStats: false,
      isRankStats: false,
      lakeIndexFilter: null,
      baitFilter: null,
      styleFilter: null,
    };
  }

  resetStatsScreen = () => {
    this.setState({
      filteredCastList: [],
      generalStats: {
        catchRate: null,
        timeCasted: null,
        bites: null,
        catches: null,
        heaviestCatch: null,
        filteredCastTotal: null,
      },
      isCastStats: false,
      isRankStats: false,
      lakeIndexFilter: null,
      baitFilter: null,
      styleFilter: null,
    });
  };

  showCastStats = () => {
    let newFilteredList = [];
    let castStats = [...this.props.castHistory];
    castStats.map((cast, index) => {
      newFilteredList.push(index);
    });
    this.mapStats(newFilteredList);
    this.setState({ isCastStats: true });
  };

  showRankings = () => {
    let newRankingsList = [];
    let castDataIndexes = [...this.props.castHistory];
    castDataIndexes.map((cast, index) => {
      newRankingsList.push(index);
    });
    this.mapStats(newRankingsList);
    this.setState({ isRankStats: true });
  };

  mapStats = (filteredCastList) => {
    let newFilter = filteredCastList;
    let newAllDaysOfYear = [];
    for (let i = 0; i < 372; i++) {
      newAllDaysOfYear.push(0);
    }
    let newDayArray = [];
    for (let i = 0; i < 24; i++) {
      newDayArray.push(0);
    }
    let filteredBaitUsage = [];
    for (let i = 0; i < this.props.baits.length + 1; i++) {
      //+1 on array to store null baits
      filteredBaitUsage.push(0);
    }
    let filteredStyleUsage = [];
    for (let i = 0; i < this.props.styles.length + 1; i++) {
      //+1 on array to store null baits
      filteredStyleUsage.push(0);
    }
    let filteredSpeciesList = [];
    for (let i = 0; i < this.props.species.length + 1; i++) {
      //+1 on array to store null baits
      filteredSpeciesList.push(0);
    }
    let filteredCatches = 0;
    let filteredTimeCasted = 0;
    let filteredBites = 0;
    let filteredHeaviestCatch = 0;
    newFilter.map((castIndex) => {
      if (this.props.castHistory[castIndex].catchSuccess === true) {
        filteredCatches++;
        let date = this.props.mSToDate(
          this.props.castHistory[castIndex].reelInTime
        );
        let dayOfLongYear = date.getDate() + date.getMonth() * 31;
        newAllDaysOfYear[dayOfLongYear] += 1;
        let hour = date.getHours();
        newDayArray[hour] += 1;
        this.props.castHistory[castIndex].species === null
          ? (filteredSpeciesList[this.props.species.length] += 1)
          : (filteredSpeciesList[
              this.props.species.indexOf(
                this.props.castHistory[castIndex].species
              )
            ] += 1);
        if (this.props.castHistory[castIndex].weight > filteredHeaviestCatch) {
          filteredHeaviestCatch = this.props.castHistory[castIndex].weight;
        }
      }

      filteredTimeCasted += this.props.castHistory[castIndex].duration;
      filteredBites += this.props.castHistory[castIndex].bites;

      this.props.castHistory[castIndex].bait === null
        ? (filteredBaitUsage[this.props.baits.length] += 1)
        : (filteredBaitUsage[
            this.props.baits.indexOf(this.props.castHistory[castIndex].bait)
          ] += 1);
      this.props.castHistory[castIndex].style === null
        ? (filteredStyleUsage[this.props.styles.length] += 1)
        : (filteredStyleUsage[
            this.props.styles.indexOf(this.props.castHistory[castIndex].style)
          ] += 1);
    });

    let newCatchRate = filteredCatches / filteredCastList.length;
    let newCastingDuration = filteredTimeCasted;
    let newBites = filteredBites;
    let newCatches = filteredCatches;
    let newHeaviestCatch = filteredHeaviestCatch;
    let newFilteredCastToltal = filteredCastList.length;

    let newGeneralStats = {
      catchRate: newCatchRate,
      dayArray: newDayArray,
      timeCasted: newCastingDuration,
      bites: newBites,
      catches: newCatches,
      heaviestCatch: newHeaviestCatch,
      filteredCastTotal: newFilteredCastToltal,
    };

    newAllDaysOfYear.splice(61, 1);
    newAllDaysOfYear.splice(62, 1);
    newAllDaysOfYear.splice(124, 1);
    newAllDaysOfYear.splice(186, 1);
    newAllDaysOfYear.splice(279, 1);
    newAllDaysOfYear.splice(341, 1);

    this.setState({
      generalStats: newGeneralStats,
      daysOfYearArray: newAllDaysOfYear,
      dayArray: newDayArray,
      baitUsage: filteredBaitUsage,
      styleUsage: filteredStyleUsage,
      catchSpecies: filteredSpeciesList,
    });
  };

  updateFilterList = (lakeIndexFilter, baitFilter, styleFilter) => {
    let newFilterList = [];
    this.props.castHistory.map((cast, index) => {
      if (lakeIndexFilter !== null) {
        if (lakeIndexFilter !== cast.lakeIndex) {
          return;
        }
      }
      if (baitFilter !== null) {
        if (baitFilter !== cast.bait) {
          return;
        }
      }
      if (styleFilter !== null) {
        if (styleFilter !== cast.style) {
          return;
        }
      }
      newFilterList.push(index);
    });
    this.mapStats(newFilterList);
  };

  setLakeFilter = (index) => {
    let newLakeFilter = this.state.lakeIndexFilter;
    newLakeFilter = index;
    this.setState({ lakeIndexFilter: newLakeFilter });
    this.updateFilterList(
      newLakeFilter,
      this.state.baitFilter,
      this.state.styleFilter
    );
  };

  setBaitFilter = (bait) => {
    let newBaitFilter = this.state.baitFilter;
    newBaitFilter = bait;
    this.setState({ baitFilter: newBaitFilter });
    this.updateFilterList(
      this.state.lakeIndexFilter,
      newBaitFilter,
      this.state.styleFilter
    );
  };

  setStyleFilter = (style) => {
    let newStyleFilter = this.state.styleFilter;
    newStyleFilter = style;

    this.updateFilterList(
      this.state.lakeIndexFilter,
      this.state.baitFilter,
      newStyleFilter
    );
    this.setState({ styleFilter: newStyleFilter });
  };

  changeLakeFilterx;
  render() {
    return (
      <div>
        {this.state.isCastStats ? (
          <div className={styles.container}>
            <div className={styles.filterContainer}>
              <DropdownButton
                as={ButtonGroup}
                variant="info"
                title={
                  this.state.lakeIndexFilter !== null
                    ? this.props.lakes[this.state.lakeIndexFilter].name
                    : "All lakes"
                }
              >
                <Dropdown.Item
                  eventKey={0}
                  onClick={() => {
                    this.setLakeFilter(null);
                  }}
                >
                  All lakes
                </Dropdown.Item>
                {this.props.lakes.map((lake, index) => (
                  <Dropdown.Item
                    eventKey={index + 1}
                    onClick={() => {
                      this.setLakeFilter(index);
                      console.log(index);
                    }}
                  >
                    {lake.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <DropdownButton
                as={ButtonGroup}
                variant="info"
                title={
                  this.state.baitFilter !== null
                    ? this.state.baitFilter
                    : "All baits"
                }
              >
                <Dropdown.Item
                  eventKey={0}
                  onClick={() => {
                    this.setBaitFilter(null);
                  }}
                >
                  All baits
                </Dropdown.Item>
                {this.props.baits.map((bait, index) => (
                  <Dropdown.Item
                    eventKey={index + 1}
                    onClick={() => {
                      this.setBaitFilter(bait);
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
                  this.state.styleFilter !== null
                    ? this.state.styleFilter
                    : "All styles"
                }
              >
                <Dropdown.Item
                  eventKey={0}
                  onClick={() => {
                    this.setStyleFilter(null);
                  }}
                >
                  All styles
                </Dropdown.Item>
                {this.props.styles.map((style, index) => (
                  <Dropdown.Item
                    eventKey={index + 1}
                    onClick={() => {
                      this.setStyleFilter(style);
                    }}
                  >
                    {style}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>

            <div className={styles.generalStats}>
              <div className={styles.generalStat}>
                <div className={styles.generalStatHeader}>Time cast:</div>{" "}
                {this.props.mSToReadable(this.state.generalStats.timeCasted)}
              </div>
              <div className={styles.generalStat}>
                <div className={styles.generalStatHeader}>Heaviest catch:</div>{" "}
                {this.props.kilosToPoundsReadable(
                  this.state.generalStats.heaviestCatch
                )}
              </div>
              <div className={styles.generalStat}>
                <div className={styles.generalStatHeader}>Catches:</div>{" "}
                {this.state.generalStats.catches}
              </div>
              <div className={styles.generalStat}>
                <div className={styles.generalStatHeader}>Catch rate:</div>{" "}
                {(this.state.generalStats.catchRate * 100).toFixed(0)}%
              </div>
              <div className={styles.generalStat}>
                <div className={styles.generalStatHeader}>Bites:</div>{" "}
                {this.state.generalStats.bites}
              </div>
              <div className={styles.generalStat}>
                <div className={styles.generalStatHeader}>Casts:</div>{" "}
                {this.state.generalStats.filteredCastTotal}
              </div>
            </div>

            <div className={styles.categoryStats}>
              <div className={styles.timeGraphContainer}>
                <div className={styles.year}>
                  {this.state.daysOfYearArray.map((day, index) => (
                    <div className={styles.day}>
                      <div
                        style={{
                          backgroundColor: "white",
                          width: "0.2vw",
                          height: day < 10 ? `${8 - day * 0.8}vh` : "8vh",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "green",
                          width: "0.2vw",
                          height: day < 10 ? `${day * 0.8}vh` : "8vh",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.timeGraphContainer}>
                <div className={styles.hours}>
                  {this.state.dayArray.map((hour, index) => (
                    <div className={styles.hour}>
                      <div
                        style={{
                          backgroundColor: "white",
                          width: `${80 / 24}vw`,
                          height: hour < 10 ? `${8 - hour * 0.8}vh` : "8vh",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "green",
                          width: `${80 / 24}vw`,
                          height: hour < 10 ? `${hour * 0.8}vh` : "8vh",
                        }}
                      ></div>
                      <div className={styles.hourScale}> {index} </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.graphContainer}>
                {this.state.baitUsage.map((bait, index) =>
                  bait ? (
                    <div
                      className={styles.graph}
                      style={{
                        width: `${
                          (80 /
                            this.state.baitUsage.reduce((a, b) => a + b, 0)) *
                          bait
                        }vw`,
                        color: "white",
                        backgroundColor:
                          index % 4 === 0
                            ? "blue"
                            : index % 4 === 1
                            ? "red"
                            : index % 4 === 2
                            ? "green"
                            : "yellow",
                        fontSize: "small",
                        textAlign: "center",
                      }}
                    >
                      {index === this.props.baits.length
                        ? "NA"
                        : this.props.baits[index]}
                    </div>
                  ) : null
                )}
              </div>

              <div className={styles.graphContainer}>
                {this.state.styleUsage.map((style, index) =>
                  style ? (
                    <div
                      className={styles.graph}
                      style={{
                        width: `${
                          (80 /
                            this.state.styleUsage.reduce((a, b) => a + b, 0)) *
                          style
                        }vw`,
                        color: "white",
                        backgroundColor:
                          index % 4 === 0
                            ? "blue"
                            : index % 4 === 1
                            ? "red"
                            : index % 4 === 2
                            ? "green"
                            : "yellow",
                        fontSize: "small",
                        textAlign: "center",
                      }}
                    >
                      {index === this.props.styles.length
                        ? "NA"
                        : this.props.styles[index]}
                    </div>
                  ) : null
                )}
              </div>

              <div className={styles.graphContainer}>
                {this.state.catchSpecies.map((species, index) =>
                  species ? (
                    <div
                      className={styles.graph}
                      style={{
                        width: `${
                          (80 /
                            this.state.catchSpecies.reduce(
                              (a, b) => a + b,
                              0
                            )) *
                          species
                        }vw`,
                        color: "white",
                        backgroundColor:
                          index % 4 === 0
                            ? "blue"
                            : index % 4 === 1
                            ? "red"
                            : index % 4 === 2
                            ? "green"
                            : "yellow",
                        fontSize: "small",
                        textAlign: "center",
                      }}
                    >
                      {index === this.props.species.length
                        ? "NA"
                        : this.props.species[index]}
                    </div>
                  ) : null
                )}
              </div>
            </div>

            <Button
              className={styles.backButton}
              variant="primary"
              onClick={this.resetStatsScreen}
            >
              Back
            </Button>
          </div>
        ) : this.state.isRankStats ? (
          <div className={styles.container}>
            <div className={styles.statsContainer}>
              <Rankings
                lakes={this.props.lakes}
                baits={this.props.baits}
                styles={this.props.styles}
                species={this.props.species}
                setLakeFilter={this.setLakeFilter}
                setBaitFilter={this.setBaitFilter}
                setStyleFilter={this.setStyleFilter}
                lakeIndexFilter={this.state.lakeIndexFilter}
                baitFilter={this.state.baitFilter}
                styleFilter={this.state.styleFilter}
                baitUsage={this.state.baitUsage}
                styleUsage={this.state.styleUsage}
                catchSpecies={this.state.catchSpecies}
              ></Rankings>
            </div>
            <Button
              className={styles.backButton}
              variant="primary"
              onClick={this.resetStatsScreen}
            >
              Back
            </Button>
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.statsOptions}>
              <Button
                className={styles.statSelectorButton}
                variant="primary"
                onClick={this.showCastStats}
              >
                Cast stats
              </Button>
              <Button
                className={styles.statSelectorButton}
                variant="primary"
                onClick={this.showRankings}
              >
                Rankings
              </Button>
            </div>
            <Link to="/fishv2/">
              <Button className={styles.backButton} variant="primary">
                Back
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Statistics;
