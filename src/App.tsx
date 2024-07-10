import React from "react";
import "./App.css";
import ButtonControl from "./views/ButtonControl";
import AutocompleteControl from "./views/AutocompleteControl";
import ControlStore from "./models/ControlStore";
import AutocompleteStore from "./models/AutocompleteStore";
import ButtonControlViewModel from "./viewmodels/ButtonControlViewModel";
import AutocompleteControlViewModel from "./viewmodels/AutocompleteControlViewModel";

const controlStore1 = new ControlStore();
const controlStore2 = new ControlStore();

const autocompleteStore1 = new AutocompleteStore();
const autocompleteStore2 = new AutocompleteStore();

const buttonControlViewModel1 = new ButtonControlViewModel(controlStore1);
const buttonControlViewModel2 = new ButtonControlViewModel(controlStore2);
const autocompleteControlViewModel1 = new AutocompleteControlViewModel(autocompleteStore1);
const autocompleteControlViewModel2 = new AutocompleteControlViewModel(autocompleteStore2);

autocompleteControlViewModel1.setMaxSuggestions(3);
autocompleteControlViewModel2.setMaxSuggestions(10);

function App() {
  return (
    <main>
      <h1>Тестовое задание</h1>
      <section>
        <h2>Контрол с кнопками</h2>
        <article className="buttonControlsArticle">
          <div className="example">
            <p className="margin-0">Пример 1:</p>
            <ButtonControl
                viewModel={buttonControlViewModel1}
              rightButtons={[
                { text: "Очистить", onClick: () => controlStore1.clearText() },
                {
                  text: "Hello World",
                  onClick: () => controlStore1.setText("Hello world!"),
                },
              ]}
            />
          </div>
          <div className="example">
            <p className="margin-0">Пример 2:</p>
            <ButtonControl
            viewModel={buttonControlViewModel2}
              leftButtons={[
                {
                  text: "Alert Число",
                  onClick: () => {
                    if (!isNaN(Number(controlStore2.text))) {
                      alert(controlStore2.text);
                    }
                  },
                },
              ]}
              rightButtons={[
                {
                  text: "Alert Текст",
                  onClick: () => alert(controlStore2.text),
                },
              ]}
            />
          </div>
        </article>
      </section>
      <section>
        <h2>Контрол-автокомплит</h2>
        <article className="buttonControlsArticle">
          <div className="example">
            <p className="margin-0">Пример 1 (3 подсказки):</p>
            <AutocompleteControl viewModel={autocompleteControlViewModel1} />
          </div>
          <div className="example">
            <p className="margin-0">Пример 2 (10 подсказок):</p>
            <AutocompleteControl viewModel={autocompleteControlViewModel2} />
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
