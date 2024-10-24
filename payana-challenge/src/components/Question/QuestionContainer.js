import React from 'react';
import Question from './Question';

function QuestionContainer({ 
   question, 
   currentAnswer, 
   currentQuestionIndex, 
   questionsLength, 
   handleAnswer, 
   goNext, 
   goBack, 
   handleSubmit 
 }) {
  return (
    <Question
      question={question}
      answer={currentAnswer}
      onAnswer={handleAnswer}
      showPrevious={currentQuestionIndex > 0}
      showNext={currentAnswer !== '' && currentQuestionIndex < questionsLength - 1}
      showSubmit={currentAnswer !== '' && currentQuestionIndex === questionsLength - 1}
      goNext={goNext}
      goBack={goBack}
      onSubmit={handleSubmit}
    />
  );
}

export default QuestionContainer;
