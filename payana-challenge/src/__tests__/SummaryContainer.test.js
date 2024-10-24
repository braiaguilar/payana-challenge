import { render, screen } from '@testing-library/react';
import SummaryContainer from '../components/Summary/SummaryContainer.js';

describe('SummaryContainer', () => {
  const answers = {
    1: 4,
    2: 3,
    3: 5,
  };

  const questions = [
    { id: 1, texto: '¿Cuán fácil fue pagar tus facturas?' },
    { id: 2, texto: '¿Qué te parece el costo por transacción?' },
    { id: 3, texto: '¿Qué te pareció el nuevo módulo de Cobros?' },
  ];

  it('should display the correct question texts and answers', () => {
    render(<SummaryContainer answers={answers} questions={questions} />);

    expect(screen.getByText('¿Cuán fácil fue pagar tus facturas?')).toBeInTheDocument();
    expect(screen.getByText('Your answer: 4')).toBeInTheDocument();
    
    expect(screen.getByText('¿Qué te parece el costo por transacción?')).toBeInTheDocument();
    expect(screen.getByText('Your answer: 3')).toBeInTheDocument();
    
    expect(screen.getByText('¿Qué te pareció el nuevo módulo de Cobros?')).toBeInTheDocument();
    expect(screen.getByText('Your answer: 5')).toBeInTheDocument();
  });
});
