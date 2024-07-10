import React from "react";
import "./App.css";
import ButtonControl from "./components/ButtonControl";
import ControlStore from "./store/ControlStore";

const controlStore1 = new ControlStore();
const controlStore2 = new ControlStore();


function App() {
  return (
    <div>
      <ButtonControl
        rightButtons={[
          { text: "Clear", onClick: () => controlStore1.clearText() },
          {
            text: "Hello World",
            onClick: () => controlStore1.setText("Hello world!"),
          },
        ]}
        store={controlStore1}
      />
      <ButtonControl
        leftButtons={[
          {
            text: "Alert Number",
            onClick: () => {
              if (!isNaN(Number(controlStore2.text))) {
                alert(controlStore2.text);
              }
            },
          },
        ]}
        rightButtons={[
          { text: "Alert Text", onClick: () => alert(controlStore2.text) },
        ]}
        store={controlStore2}
      />
    </div>
  );
}

export default App;
