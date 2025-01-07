import React from 'react';

type TriesCounterProps = {
    tries: number;
};

const TriesCounter: React.FC<TriesCounterProps> = ({ tries }) => <p>Tries: {tries}</p>;

export default TriesCounter;