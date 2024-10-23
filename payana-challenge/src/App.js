import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Question from './components/Question';
import Summary from './components/Summary';
import questionsData from './data/questions.json';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    setQuestions(questionsData.preguntas);
  }, []);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const goNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Question
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              goNext={goNext}
              goBack={goBack}
              answer={answers[questions[currentQuestionIndex]?.id]}
            />
          }
        />
        <Route
          path="/summary"
          element={<Summary answers={answers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
