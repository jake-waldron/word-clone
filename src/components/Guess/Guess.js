import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
	return (
		<p className="guess">
			{range(5).map((letterIndex) => (
				<span key={letterIndex} className="cell">
					{guess?.[letterIndex] || ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
