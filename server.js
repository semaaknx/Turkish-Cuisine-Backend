const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Erster Test-Endpunkt (Route)
app.get('/api/test', (req, res) => {
  res.json({ message: 'Das Turkish-Cuisine Backend läuft erfolgreich!' });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});