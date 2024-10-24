import { render, screen } from '@testing-library/react';
import QuestionContainer from '../components/Question/QuestionContainer.js';

describe('QuestionContainer', () => {
  const question = {
    id: 1,
    texto: '¿Cuán fácil fue pagar tus facturas?',
  };

  it('renders the Question component with correct props', () => {
    render(
      <QuestionContainer
        question={question}
        currentAnswer={2}
        currentQuestionIndex={0}
        questionsLength={5}
        handleAnswer={() => {}}
        goNext={() => {}}
        goBack={() => {}}
        handleSubmit={() => {}}
      />
    );

    expect(screen.getByText('¿Cuán fácil fue pagar tus facturas?')).toBeInTheDocument();
    expect(screen.getByLabelText('2')).toBeChecked(); // Verifica si el botón de opción '2' está seleccionado
  });
});
