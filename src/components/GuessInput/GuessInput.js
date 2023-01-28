import React from 'react';

function GuessInput({ addGuess, gameStatus }) {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		if (guess.length !== 5) {
			window.alert('Please enter a 5 letter word');
			return;
		}
		console.log({ guess });
		addGuess(guess);
		setGuess('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				disabled={gameStatus !== 'playing'}
				minLength={5}
				maxLength={5}
				id="guess-input"
				type="text"
				value={guess}
				onChange={(e) => setGuess(e.target.value.toUpperCase().trim())}
			/>
		</form>
	);
}

export default GuessInput;
