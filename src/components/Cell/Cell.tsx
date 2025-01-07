import React from 'react';
import './Cell.css';

type CellProps = {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
};

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => (
    <div className={`cell ${clicked ? 'clicked' : ''}`} onClick={onClick}>
        {clicked && hasItem ? 'O' : ''}
    </div>
);

export default Cell;