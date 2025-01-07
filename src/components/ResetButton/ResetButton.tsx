import React from 'react';
import './ResetButton.css'

type ResetButtonProps = {
    onReset: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => <button className="reset-button" onClick={onReset}>Reset</button>;

export default ResetButton;