const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});


const PORT = precess.env.PORT || 5000;
app.listen(PORT);