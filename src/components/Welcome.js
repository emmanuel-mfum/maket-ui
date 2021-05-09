import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <h2 className={styles.welcome}>Prototype </h2>
      <h1 className={styles.welcome}>Welcome!</h1>
      <p> Thank you for trusting Maket for your new home.</p> <br />
      <p>
        This setup will walk you through the steps of in selecting and designing
        your new home
      </p>
    </div>
  );
};

export default Welcome;
