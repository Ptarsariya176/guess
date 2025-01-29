import React, { useState } from "react";

const Num = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [randomNumber, setRandomNumber] = useState(getRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(10);
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    if (gameOver || guess === "") return;

    const numberGuess = Number(guess);
    if (numberGuess < 1 || numberGuess > 100 || isNaN(numberGuess)) {
      setMessage("🚨 Please enter a number between 1 and 100.");
      return;
    }

    setGuessedNumbers([...guessedNumbers, numberGuess]);
    setAttempts(attempts - 1);

    if (numberGuess === randomNumber) {
      setMessage(`🎉 Congratulations! You guessed the number ${randomNumber}!`);
      setGameOver(true);
    } else if (attempts === 1) {
      setMessage(`❌ Game Over! The number was ${randomNumber}.`);
      setGameOver(true);
    } else {
      setMessage(numberGuess > randomNumber ? "📈 Too high!" : "📉 Too low!");
    }

    setGuess("");
  };

  const resetGame = () => {
    setRandomNumber(getRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(10);
    setGuessedNumbers([]);
    setGameOver(false);
  };

  return (
    <div style={styles.container}>
      <h2>🎯 Number Guessing Game</h2>
      <p>Guess a number between 1 and 100.</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameOver}
        style={styles.input}
      />
      <button onClick={handleGuess} disabled={gameOver} style={styles.button}>
        Submit Guess
      </button>
      <p>{message}</p>
      <p>Attempts Left: {attempts}</p>
      <p>Previous Guesses: {guessedNumbers.join(", ")}</p>
      {gameOver && (
        <button onClick={resetGame} style={styles.button}>
          🔄 Play Again
        </button>
      )}
    </div>
  );
};

// 🎨 Simple Inline CSS Styling
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  input: {
    margin: "10px",
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    margin: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Num;
