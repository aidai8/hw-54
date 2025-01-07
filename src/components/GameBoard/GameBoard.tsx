import React from 'react';
import Cell from '../Cell/Cell.tsx'
import './GameBoard.css';

type GameBoardProps = {
    items: { hasItem: boolean; clicked: boolean }[];
    onCellClick: (index: number) => void;
};

const GameBoard: React.FC<GameBoardProps> = ({ items, onCellClick }) => (
    <div className="game-board">
        {items.map((item, index) => (
            <Cell key={index} hasItem={item.hasItem} clicked={item.clicked} onClick={() => onCellClick(index)} />
        ))}
    </div>
);

export default GameBoard;