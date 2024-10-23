import React, { useState, useEffect } from 'react';
import { Container, LinearProgress, Box } from '@mui/material';
import Question from './components/Question';
import Summary from './components/Summary';
import questionsData from './data/questions.json';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);

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

  const handleSubmit = () => {
    setIsReviewing(true);
  };

  const handleEdit = () => {
    setIsReviewing(false);
    setCurrentQuestionIndex(0);
  };

  if (isReviewing) {
    return <Summary answers={answers} onEdit={handleEdit} questions={questions} />;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion?.id];

  const progress = (currentQuestionIndex + 1) / questions.length * 100;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 2 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          goNext={goNext}
          goBack={goBack}
          answer={currentAnswer}
          showPrevious={currentQuestionIndex > 0}
          showNext={currentAnswer !== undefined && currentQuestionIndex < questions.length - 1}
          showSubmit={currentAnswer !== undefined && currentQuestionIndex === questions.length - 1}
          onSubmit={handleSubmit}
        />
      )}
    </Container>
  );
}

export default App;
