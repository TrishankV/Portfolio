// src/components/Quiz.js

import React, { useState } from 'react';
import questions from '../questions.json';

const Quiz = () => {
  const [quizPoints, setQuizPoints] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
      setQuizPoints(quizPoints + 1);
      setFeedback('Correct! You know your retro games!');
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setUserAnswer('');
        } else {
          setIsGameOver(true);
        }
      }, 1000);
    } else {
      setFeedback('Try again!');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setFeedback('');
    } else {
      setIsGameOver(true);
    }
  };

  if (isGameOver) {
    return (
      <div className="quiz-container">
        <h3>Game Over!</h3>
        <p>Your score: {quizPoints} out of {questions.length}</p>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {isGameStarted ? (
        <>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <input 
            type="text" 
            value={userAnswer} 
            onChange={(e) => setUserAnswer(e.target.value)} 
            placeholder="Your answer..."
          />
          <button onClick={checkAnswer}>Submit Answer</button>
          <button onClick={handleNextQuestion} disabled={feedback === ''}>
            Next Question
          </button>
          <p>{feedback}</p>
          <p>Score: {quizPoints}</p>
        </>
      ) : (
        <button onClick={() => setIsGameStarted(true)}>Start Quiz</button>
      )}
    </div>
  );
};

export default Quiz;
