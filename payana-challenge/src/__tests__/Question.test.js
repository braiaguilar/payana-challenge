import { render, screen } from '@testing-library/react';
import Question from '../components/Question/Question.js';

describe('Question', () => {
  const question = {
    id: 1,
    texto: '¿Cuán fácil fue pagar tus facturas?',
  };

  it('renders question text and options', () => {
    render(
      <Question
        question={question}
        onAnswer={() => {}}
        answer={2}
        goNext={() => {}}
        goBack={() => {}}
        showPrevious={false}
        showNext={true}
        showSubmit={false}
        onSubmit={() => {}}
      />
    );

    expect(screen.getByText('¿Cuán fácil fue pagar tus facturas?')).toBeInTheDocument();
    expect(screen.getByLabelText('1')).toBeInTheDocument();
    expect(screen.getByLabelText('2')).toBeInTheDocument();
    expect(screen.getByLabelText('3')).toBeInTheDocument();
    expect(screen.getByLabelText('4')).toBeInTheDocument();
    expect(screen.getByLabelText('5')).toBeInTheDocument();
  });
});
