import { makeAutoObservable } from "mobx";

class ControlStore {
    text: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    setText(text: string) {
        this.text = text;
    }

    clearText() {
        this.text = "";
    }
}

export default ControlStore;
