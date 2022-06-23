import "./App.css";
import "intro.js/introjs.css";
import { Steps } from "intro.js-react";
import React, { useState } from "react";
function App() {
  const [enabled, setEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);

  const onExit = () => {
    setEnabled(false);
  };
  const steps = [
    {
      element: "#help",
      intro: "You can use this button for help",
      position: "right",
    },
    {
      element: "#about",
      intro: "You can use this button to get more information",
    },
    {
      element: "#contact",
      intro: "You can use this button to contact us",
    },
  ];
  return (
    <div className="App">
      <Steps
        enabled={enabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />
      <div id="buttonRow">
        <button id="help">Help</button>
        <button id="about">About</button>
        <button id="contact">Contact Us</button>
      </div>
    </div>
  );
}
export default App;
