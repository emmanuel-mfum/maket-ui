import React, { useState} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Backdrop from "./containers/Backdrop";
function App() {
  const [showBackdrop, setShowBackDrop] = useState(false);

  const toggleBackdrop = (value) => {
    setShowBackDrop(value);
  };

 /*  const removeBackdrop = (value) => {
    setShowBackDrop(value);
  } */

  if (showBackdrop) {
    return (
      <BrowserRouter>
        <Backdrop/>
      </BrowserRouter>
    );
  } else {
    return <Home toggleBack={toggleBackdrop}></Home>;
  }
}

export default App;
