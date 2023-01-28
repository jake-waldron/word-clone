import React from 'react';
import { range } from '../../utils';

function Guess({ guesses, guessNumber }) {
	return (
		<p key={guessNumber} className="guess">
			{range(5).map((letterIndex) => (
				<span key={letterIndex} className="cell">
					{guesses[guessNumber]?.[letterIndex] || ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
