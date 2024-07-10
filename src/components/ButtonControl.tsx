import React from "react";
import { observer } from "mobx-react-lite";
import ControlStore from "../store/ControlStore";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
);

interface ButtonControlProps {
    rightButtons: ButtonProps[];
    leftButtons?: ButtonProps[];
    store: ControlStore;
}

const ButtonControl: React.FC<ButtonControlProps> = ({ rightButtons, leftButtons = [], store }) => {
    return (
        <div>
            {leftButtons.map((btn, index) => (
                <Button key={index} {...btn} />
            ))}
            <input
                type="text"
                value={store.text}
                onChange={(e) => store.setText(e.target.value)}
            />
            {rightButtons.map((btn, index) => (
                <Button key={index} {...btn} />
            ))}
        </div>
    );
};

export default observer(ButtonControl);
