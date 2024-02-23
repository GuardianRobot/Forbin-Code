const express = require('express');
const app = express();

// Environment variable for port or 3000 as default
const port = process.env.PORT || 3000;

app.get('/:word', (req, res) => {
    const word = req.params.word;
    res.send(`You entered: ${word}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
