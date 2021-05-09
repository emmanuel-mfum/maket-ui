import React from "react";
import Card from "../UI/Card";

const Lands = () => {

    const plots = ['Montérégie', 'Eastern Townships', 'Outaouais'];

  return (
    <>
      <h1 style={{ color: "black" }}>Lands !</h1>
      {plots.map(plot => {
         return  <Card><p>Plot of Land in {plot}</p></Card>

      })}
    </>
  );
};

export default Lands;
