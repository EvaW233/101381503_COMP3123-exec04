const express = require('express');
const app = express();
const port = 8089;

app.use(express.json());


app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
  
  const firstname = 'Yiting';
  const lastname = 'Wang';

  res.json({ firstname, lastname });
});


app.post('/user', (req, res) => {
  const { firstname, lastname } = req.body;
  
  if (!firstname || !lastname) {
    res.status(400).json({ error: 'Both firstname and lastname are required.' });
  } else {
    res.json({ firstname, lastname });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
