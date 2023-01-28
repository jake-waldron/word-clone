import React from 'react';

import GuessInput from '../GuessInput/GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function HappyBanner({ numOfGuesses }) {
	return (
		<div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
			</p>
		</div>
	);
}

function SadBanner() {
	return (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	);
}

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('playing');

	function addGuess(guess) {
		const newGuesses = [...guesses, guess];
		setGuesses(newGuesses);
		if (guess === answer) {
			return setGameStatus('won');
		}
		if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
			return setGameStatus('lost');
		}
	}

	return (
		<>
			{gameStatus === 'won' && <HappyBanner numOfGuesses={guesses.length} />}
			{gameStatus === 'lost' && <SadBanner />}
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput gameStatus={gameStatus} addGuess={addGuess} />
		</>
	);
}

export default Game;
