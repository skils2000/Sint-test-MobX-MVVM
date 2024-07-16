import { makeAutoObservable } from "mobx";
import AutocompleteStore from "../models/AutocompleteStore";
import { getCountryByName } from "../api/apiService";

class AutocompleteControlViewModel {
    store: AutocompleteStore;
    private currentRequest: AbortController | null = null;

    constructor(store: AutocompleteStore) {
        this.store = store;
        makeAutoObservable(this);
    }

    async fetchSuggestions(query: string) {
        if (this.currentRequest) {
            this.currentRequest.abort();
        }
        this.currentRequest = new AbortController();

        try {
            const suggestions = await getCountryByName(query, this.currentRequest.signal);
            this.store.setSuggestions(suggestions);            
        } catch (error: unknown) {
            if (error instanceof DOMException && error.name === "AbortError") {
                console.log("Request was aborted");
            } else {
                console.error("Fetch error: ", error);
            }
        } finally {
            this.currentRequest = null;
        }
    }

    setMaxSuggestions(max: number) {
        this.store.setMaxSuggestions(max);
    }

    get suggestions() {
        return this.store.suggestions.slice(0, this.store.maxSuggestions);
    }
}

export default AutocompleteControlViewModel;
