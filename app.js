const express = require('express');
const app = express();

const PORT = 3004;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Esta pagina está siendo escuchada en ✨https://localhost:${PORT}`))