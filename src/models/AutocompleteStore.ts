import { makeAutoObservable } from "mobx";
import { CountryInfo } from "../api/apiService";

class AutocompleteStore {
    suggestions: CountryInfo[] = [];
    maxSuggestions: number = 3;

    constructor() {
        makeAutoObservable(this);
    }

    setSuggestions(suggestions: CountryInfo[]) {
        this.suggestions = suggestions;
    }

    setMaxSuggestions(max: number) {
        this.maxSuggestions = max;
    }
}

export default AutocompleteStore;
