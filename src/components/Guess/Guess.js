import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ guess, answer }) {
	const checkedGuess = checkGuess(guess, answer);

	return (
		<p className="guess">
			{range(5).map((letterIndex) => {
				const letterInfo = checkedGuess?.[letterIndex];
				return (
					<span key={letterIndex} className={letterInfo ? `${letterInfo.status} cell` : 'cell'}>
						{letterInfo ? letterInfo.letter : ''}
					</span>
				);
			})}
		</p>
	);
}

export default Guess;
