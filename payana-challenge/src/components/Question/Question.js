import React from 'react';
import { Button, Box, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Question({ question, onAnswer, answer, goNext, goBack, showPrevious, showNext, showSubmit, onSubmit }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {question.texto}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        (1 = {question.min}, 5 = {question.max})
      </Typography>
      <RadioGroup
        value={answer || ''}
        onChange={e => onAnswer(question.id, Number(e.target.value))}
        row
      >
        {[1, 2, 3, 4, 5].map((value) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={value}
          />
        ))}
      </RadioGroup>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        {showPrevious && <Button variant="contained" onClick={goBack}>Previous</Button>}
        {showNext && <Button variant="contained" onClick={goNext}>Next</Button>}
        {showSubmit && <Button variant="contained" endIcon={<SendIcon />} color="primary" onClick={onSubmit}>Submit</Button>}
      </Box>
    </Box>
  );
}

export default Question;
