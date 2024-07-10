import { makeAutoObservable } from "mobx";
import AutocompleteStore from "../models/AutocompleteStore";
import { getCountryByName } from "../api/apiService";

class AutocompleteControlViewModel {
    store: AutocompleteStore;

    constructor(store: AutocompleteStore) {
        this.store = store;
        makeAutoObservable(this);
    }

    async fetchSuggestions(query: string) {
        const suggestions = await getCountryByName(query);
        this.store.setSuggestions(suggestions);
    }

    setMaxSuggestions(max: number) {
        this.store.setMaxSuggestions(max);
    }

    get suggestions() {
        return this.store.suggestions.slice(0, this.store.maxSuggestions);
    }
}

export default AutocompleteControlViewModel;
