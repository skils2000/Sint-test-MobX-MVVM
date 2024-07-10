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
    <main>
      <h1>Тестовое задание</h1>
      <section>
        <h2>Контрол с кнопками</h2>
        <article className="buttonControlsArticle">
          <div className="example">
            <p className="margin-0">Пример 1:</p>
            <ButtonControl
              rightButtons={[
                { text: "Очистить", onClick: () => controlStore1.clearText() },
                {
                  text: "Hello World",
                  onClick: () => controlStore1.setText("Hello world!"),
                },
              ]}
              store={controlStore1}
            />
          </div>
          <div className="example">
            <p className="margin-0">Пример 2:</p>
            <ButtonControl
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
              store={controlStore2}
            />
          </div>
        </article>
      </section>
      <section>
        <h2>Контрол-автокомплит</h2>
        <article className="buttonControlsArticle">
          <div className="example">
            <p className="margin-0">Пример 1 (3 подсказки):</p>
            <AutocompleteControl store={autocompleteStore1} />
          </div>
          <div className="example">
            <p className="margin-0">Пример 2 (10 подсказок):</p>
            <AutocompleteControl store={autocompleteStore2} />
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
