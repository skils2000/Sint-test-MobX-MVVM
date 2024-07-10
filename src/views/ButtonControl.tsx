import React from "react";
import { observer } from "mobx-react-lite";
import ButtonControlViewModel from "../viewmodels/ButtonControlViewModel";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
);

interface ButtonControlProps {
    viewModel: ButtonControlViewModel;
    rightButtons: ButtonProps[];
    leftButtons?: ButtonProps[];
}

const ButtonControl: React.FC<ButtonControlProps> = ({ viewModel, rightButtons, leftButtons = [] }) => {
    return (
        <div>
            {leftButtons.map((btn, index) => (
                <Button key={index} {...btn} />
            ))}
            <input
                type="text"
                value={viewModel.text}
                onChange={(e) => viewModel.setText(e.target.value)}
            />
            {rightButtons.map((btn, index) => (
                <Button key={index} {...btn} />
            ))}
        </div>
    );
};

export default observer(ButtonControl);
