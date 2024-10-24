// SummaryContainer.js
import React from 'react';
import Summary from './Summary';

function SummaryContainer({ answers, questions, onEdit }) {
  const handleEdit = () => {
    onEdit();
  };

  return (
    <Summary
      answers={answers}
      questions={questions}
      onEdit={handleEdit}
    />
  );
}

export default SummaryContainer;
