import React, { useState } from 'react';
import { Container, LinearProgress, Box } from '@mui/material';
import QuestionContainer from './components/Question/QuestionContainer.js';
import SummaryContainer from './components/Summary/SummaryContainer.js';
import questionsData from './data/questions.json';

function App() {
  const [questions] = useState(questionsData.preguntas);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => setIsReviewing(true);
  const handleEdit = () => {
    setIsReviewing(false);
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion?.id] ?? '';

  if (isReviewing) {
    return (
      <SummaryContainer 
        answers={answers} 
        questions={questions} 
        onEdit={handleEdit} 
      />
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 2 }}>
        <LinearProgress variant="determinate" value={((currentQuestionIndex + 1) / questions.length) * 100} />
      </Box>
      {currentQuestion && (
        <QuestionContainer
          question={currentQuestion}
          currentAnswer={currentAnswer}
          currentQuestionIndex={currentQuestionIndex}
          questionsLength={questions.length}
          handleAnswer={handleAnswer}
          goNext={() => setCurrentQuestionIndex(prev => prev + 1)}
          goBack={() => setCurrentQuestionIndex(prev => prev - 1)}
          handleSubmit={handleSubmit}
        />
      )}
    </Container>
  );
}

export default App;
