import { makeAutoObservable } from "mobx";
import ControlStore from "../models/ControlStore";

class ButtonControlViewModel {
    store: ControlStore;

    constructor(store: ControlStore) {
        this.store = store;
        makeAutoObservable(this);
    }

    setText(text: string) {
        this.store.setText(text);
    }

    clearText() {
        this.store.clearText();
    }

    get text() {
        return this.store.text;
    }
}

export default ButtonControlViewModel;
