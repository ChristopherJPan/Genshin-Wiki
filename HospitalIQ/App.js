import "./styles.css";
import React, { useEffect, useState } from "react";
import UnitCard from "./UnitCard";

export default function App() {
  const [hospitalUnits, setHospitalUnits] = useState([]);
  const [arrowState, setArrowState] = useState({
    capacity: 0,
    census: 0,
    highAlarm: 0,
    lowAlarm: 0,
  });
  // const [bool, setBool] = useState(true);

  //make a state to hold the unitcardArray

  useEffect(() => {
    fetch("https://private-66479-hospiqtest.apiary-mock.com/units")
      .then((response) => response.json())
      .then((data) => setHospitalUnits(data));
  }, []);
  //change to function that can be called and pass in hospitalUnits
  const unitCardArray = hospitalUnits.map((unit) => {
    let status = "normal";
    if (unit.highAlarm < unit.census && unit.highAlarm) {
      status = "high";
    } else if (unit.lowAlarm > unit.census && unit.lowAlarm) {
      status = "low";
    }
    return <UnitCard key={unit.id} unit={unit} status={status} />;
  });

  const sortCardArray = (cardName) => {
    if (arrowState[cardName]) {
      setHospitalUnits(
        hospitalUnits.sort((a, b) => {
          return a[cardName] - b[cardName];
        })
      );
    } else {
      setHospitalUnits(
        hospitalUnits.sort((a, b) => {
          return b[cardName] - a[cardName];
        })
      );
    }

    for (let [key, value] of Object.entries(arrowState)) {
      if (key === cardName) {
        if (value) {
          console.log(arrowState, cardName);
          setArrowState((prevState) => ({
            ...prevState,
            [cardName]: false,
          }));
          console.log(arrowState);
        } else {
          setArrowState((prevState) => ({
            ...prevState,
            [cardName]: true,
          }));
        }
      } else {
        setArrowState((prevState) => ({
          ...prevState,
          [key]: 0,
        }));
      }
    }
  };

  return (
    <div className="App">
      <h1> Hospital Status </h1>
      <table className="UnitTable">
        <tr>
          <th>Unit ID</th>
          <th>Unit Name</th>
          <th onClick={() => sortCardArray("capacity")}>
            Capacity{" "}
            {arrowState["capacity"] === 0 ? (
              ""
            ) : arrowState["capacity"] ? (
              <i class="arrow up"></i>
            ) : (
              <i class="arrow down"></i>
            )}
          </th>
          <th onClick={() => sortCardArray("census")}>
            Census{" "}
            {arrowState["census"] === 0 ? (
              ""
            ) : arrowState["census"] ? (
              <i class="arrow up"></i>
            ) : (
              <i class="arrow down"></i>
            )}
          </th>
          <th onClick={() => sortCardArray("highAlarm")}>
            High Alarm{" "}
            {arrowState["highAlarm"] === 0 ? (
              ""
            ) : arrowState["highAlarm"] ? (
              <i class="arrow up"></i>
            ) : (
              <i class="arrow down"></i>
            )}
          </th>
          <th onClick={() => sortCardArray("lowAlarm")}>
            Low Alarm{" "}
            {arrowState["lowAlarm"] === 0 ? (
              ""
            ) : arrowState["lowAlarm"] ? (
              <i class="arrow up"></i>
            ) : (
              <i class="arrow down"></i>
            )}
          </th>
        </tr>
        {unitCardArray}
      </table>
    </div>
  );
}
