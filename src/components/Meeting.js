import React from "react";
import Card from "../UI/Card";
import styles from "./Meeting.module.css";

const Meeting = () => {
  return (
    <>
      <h1 style={{ color: "black" }}>Meeting</h1>
      <p>Here is where you can arrange a meeting with a member of our team</p>
      <p>Bringing you one step closer to the home of your dreams !</p>
      <Card classname={styles.meeting}>
        <h2 style={{ color: "black" }}>Meeting available !</h2> <br/>
        <p>Time: Next week at 3PM with us</p>
        <a href="javascript:alert('Meeting Booked!');">Click here to book a meeting !</a>
      </Card>
    </>
  );
};

export default Meeting;
