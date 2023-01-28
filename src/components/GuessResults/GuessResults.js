import React from 'react';

function GuessResults({ guesses }) {
	return (
		<ul className="guess-results">
			{guesses.map((guess, index) => (
				<li key={index} className="guess">
					{guess}
				</li>
			))}
		</ul>
	);
}

export default GuessResults;
