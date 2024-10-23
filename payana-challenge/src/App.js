import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Summary from './components/Summary';
import questionsData from './data/questions.json';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false); // Nuevo estado para controlar si estamos editando

  useEffect(() => {
    setQuestions(questionsData.preguntas); // Cargar las preguntas desde JSON
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
    setIsReviewing(true); // Cambiar al estado de revisión (mostrar Summary)
  };

  const handleEdit = () => {
    setIsReviewing(false); // Volver al modo de edición de preguntas
    setCurrentQuestionIndex(0); // Volver a la primera pregunta
  };

  if (isReviewing) {
    return <Summary answers={answers} onEdit={handleEdit} questions={questions} />;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion?.id];

  return (
    <div className="App">
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          goNext={goNext}
          goBack={goBack}
          answer={currentAnswer}
          showPrevious={currentQuestionIndex > 0} // Mostrar Previous sólo si no es la primera pregunta
          showNext={currentAnswer !== undefined && currentQuestionIndex < questions.length - 1} // Mostrar Next si se respondió la pregunta y no es la última
          showSubmit={currentAnswer !== undefined && currentQuestionIndex === questions.length - 1} // Mostrar Submit si es la última pregunta y está respondida
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
