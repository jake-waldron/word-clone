import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => (
				<Guess key={guessIndex} guessNumber={guessIndex} guesses={guesses} />
			))}
		</div>
	);
}

export default GuessResults;
