import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import AutocompleteControlViewModel from "../viewmodels/AutocompleteControlViewModel";
import { CountryInfo } from "../api/apiService";
import "./AutocompleteControl.css";

interface AutocompleteControlProps {
  viewModel: AutocompleteControlViewModel;
}

const AutocompleteControl: React.FC<AutocompleteControlProps> = ({
  viewModel,
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input) {
      viewModel.fetchSuggestions(input);
    }
  }, [input]);

  const handleSelect = (suggestion: CountryInfo) => {
    setInput(suggestion.name);
    viewModel.store.setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {viewModel.suggestions.length > 0 && (
        <div className="suggestionsList">
          {viewModel.suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestionItem"
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.name}, {suggestion.fullName}{" "}
              <img
                src={suggestion.flag}
                height={16}
                alt={"Флаг " + suggestion.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(AutocompleteControl);
