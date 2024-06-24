import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleAnswer = useCallback(
    (isCorrect, selectedIndex) => {
      setAnsweredCorrectly(isCorrect);
      if (isCorrect) setScore((prevScore) => prevScore + 1);

      // Highlight the selected answer and the correct answer
      const buttons = document.querySelectorAll(".answer-btn");
      buttons[selectedIndex].classList.add(isCorrect ? "correct" : "incorrect");
      buttons[questions[currentQuestion].correct].classList.add("correct");

      setTimeout(() => {
        setAnsweredCorrectly(null);
        // Remove highlight classes
        buttons.forEach((button) => {
          button.classList.remove("correct", "incorrect");
        });
        setCurrentQuestion((prevQuestion) => {
          const nextQuestion = prevQuestion + 1;
          if (nextQuestion < questions.length) {
            setTimeLeft(10);
            return nextQuestion;
          } else {
            setShowResult(true);
            return prevQuestion;
          }
        });
      }, 2000); // Increased delay to 2 seconds to show the correct/incorrect answers
    },
    [questions, currentQuestion]
  );

  useEffect(() => {
    let timer;
    if (quizStarted && !showResult && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else if (timeLeft === 0) {
      handleAnswer(false, -1);
    }
    return () => clearInterval(timer);
  }, [quizStarted, showResult, timeLeft, handleAnswer]);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setLoading(true);
    fetch(`http://localhost:5000/api/questions/${selectedCategory.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched questions:", data);
        setQuestions(data);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setLoading(false);
        setQuizStarted(true);
        setTimeLeft(10);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  };

  const restartQuiz = () => {
    setSelectedCategory(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>BrainBurst: The Ultimate Quiz Challenge</h1>
        {!selectedCategory ? (
          <div className="welcome-section">
            <h2>Welcome to BrainBurst!</h2>
            <p>
              Challenge yourself with our exciting quiz categories. Choose a
              topic and test your knowledge!
            </p>
            <div className="how-to-play">
              <h3>How to play:</h3>
              <ol>
                <li>Select a category that interests you</li>
                <li>Read the category description and rules</li>
                <li>
                  Start the quiz and answer questions within the time limit
                </li>
                <li>See your score and challenge yourself to improve!</li>
              </ol>
            </div>
            <div className="category-selection">
              <h3>Select a category to begin:</h3>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => selectCategory(category)}
                  className="category-btn"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        ) : !quizStarted ? (
          <div className="category-description">
            <h2>{selectedCategory.name}</h2>
            <p>{selectedCategory.description}</p>
            <p>Number of questions: {questions.length}</p>
            <p>Time limit: {selectedCategory.timeLimit} minutes</p>
            <button onClick={startQuiz} className="category-btn">
              Start Quiz
            </button>
          </div>
        ) : loading ? (
          <div className="loading">Loading questions...</div>
        ) : showResult ? (
          <div className="result">
            <h2>Quiz Completed!</h2>
            <p>
              Your score: {score} out of {questions.length}
            </p>
            <button onClick={restartQuiz} className="category-btn">
              Restart Quiz
            </button>
          </div>
        ) : questions.length > 0 && currentQuestion < questions.length ? (
          <div className="question-section">
            <h2>
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <div className="timer">Time left: {timeLeft}s</div>
            <p>{questions[currentQuestion].question}</p>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswer(
                      index === questions[currentQuestion].correct,
                      index
                    )
                  }
                  className="answer-btn"
                  disabled={answeredCorrectly !== null}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>No questions available for this category.</div>
        )}
      </div>
    </div>
  );
}

export default App;
