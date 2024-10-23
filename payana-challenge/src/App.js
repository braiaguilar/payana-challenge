import React, { useState } from 'react';
import { Container, LinearProgress, Box } from '@mui/material';
import Question from './components/Question';
import Summary from './components/Summary';
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
    return <Summary answers={answers} onEdit={handleEdit} questions={questions} />;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 2 }}>
        <LinearProgress variant="determinate" value={((currentQuestionIndex + 1) / questions.length) * 100} />
      </Box>
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          goNext={() => setCurrentQuestionIndex(prev => prev + 1)}
          goBack={() => setCurrentQuestionIndex(prev => prev - 1)}
          answer={currentAnswer}
          showPrevious={currentQuestionIndex > 0}
          showNext={currentAnswer !== '' && currentQuestionIndex < questions.length - 1}
          showSubmit={currentAnswer !== '' && currentQuestionIndex === questions.length - 1}
          onSubmit={handleSubmit}
        />
      )}
    </Container>
  );
}

export default App;
