import React from 'react';
import { Button, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function Summary({ answers, questions, onEdit }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Your Answers
      </Typography>
      <List>
        {questions.map(({ id, texto }) => (
          <ListItem key={id}>
            <ListItemText
              primary={texto}
              secondary={`Your answer: ${answers[id]}`}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" startIcon={<EditIcon />} color="primary" onClick={onEdit}>
          Edit
        </Button>
      </Box>
    </Box>
  );
}

export default Summary;
