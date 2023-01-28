import React from 'react';

function GuessInput() {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log({ guess });
		setGuess('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guess}
				minLength={5}
				maxLength={5}
				onChange={(e) => setGuess(e.target.value.toUpperCase())}
			/>
		</form>
	);
}

export default GuessInput;
