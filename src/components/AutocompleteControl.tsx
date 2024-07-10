import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import AutocompleteStore from "../store/AutocompleteStore";
import { CountryInfo, getCountryByName } from "../api/apiService";
import "./AutocompleteControl.css";

interface AutocompleteControlProps {
  store: AutocompleteStore;
}

const AutocompleteControl: React.FC<AutocompleteControlProps> = ({ store }) => {
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const response = await getCountryByName(input);
    store.setSuggestions(response);
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  const handleSelect = (suggestion: CountryInfo) => {
    setInput(suggestion.name);
    store.setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {store.suggestions.length > 0 && (
        <div className="suggestionsList">
          {store.suggestions
            .slice(0, store.maxSuggestions)
            .map((suggestion, index) => (
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
