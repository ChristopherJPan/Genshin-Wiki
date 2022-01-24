import React from "react";

const UnitCard = (props) => {
  return (
    <tr className={props.status}>
      <td>{props.unit.id}</td>
      <td>{props.unit.name}</td>
      <td>{props.unit.capacity}</td>
      <td>{props.unit.census}</td>
      <td>{props.unit.highAlarm}</td>
      <td>{props.unit.lowAlarm}</td>
    </tr>
  );
};

export default UnitCard;
