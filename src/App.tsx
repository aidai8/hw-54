import './App.css'
import React, { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard.tsx';
import TriesCounter from './components/TriesCounter/TriesCounter.tsx';

const App: React.FC = () => {
  const createItems = () => {
    const items = Array.from({ length: 36 }, () => ({ hasItem: false, clicked: false }));
    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;
    return items;
  };

  const [items, setItems] = useState(createItems());
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState(false);

  const handleCellClick = (index: number) => {
    if (found || items[index].clicked) return;

    const newItems = [...items];
    newItems[index].clicked = true;
    setItems(newItems);
    setTries(tries + 1);

    if (newItems[index].hasItem) {
      setFound(true);
    }
  };

  const resetGame = () => {
    setItems(createItems());
    setTries(0);
    setFound(false);
  };

  const ResetButton = ({ onReset }: { onReset: () => void }) => <button onClick={onReset}>Reset</button>;

  return (
      <div className="app">
        <h1>Find the Hidden Item</h1>
        <GameBoard items={items} onCellClick={handleCellClick} />
        <TriesCounter tries={tries} />
        {found && <p className="found-message">You found the item! Reset to play again!!</p>}
        <ResetButton onReset={resetGame} />
      </div>
  );
};

export default App;