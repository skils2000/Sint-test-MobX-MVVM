import React from "react";
import "./App.css";
import AutocompleteControl from "./components/AutocompleteControl";
import ButtonControl from "./components/ButtonControl";
import AutocompleteStore from "./store/AutocompleteStore";
import ControlStore from "./store/ControlStore";

const controlStore1 = new ControlStore();
const controlStore2 = new ControlStore();

const autocompleteStore1 = new AutocompleteStore();
const autocompleteStore2 = new AutocompleteStore();

autocompleteStore1.setMaxSuggestions(3);
autocompleteStore2.setMaxSuggestions(10);

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
      <AutocompleteControl store={autocompleteStore1} />
      <AutocompleteControl store={autocompleteStore2} />
    </div>
  );
}

export default App;
