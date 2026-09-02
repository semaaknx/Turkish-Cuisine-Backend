const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Verbindungs-String
const MONGO_URI = 'mongodb+srv://semaakinci_db_user:KmdNKrQfxvpACamt@cluster0.eewae2y.mongodb.net/turkish_cuisine?retryWrites=true&w=majority';

// Datenbank-Verbindung herstellen
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Erfolgreich mit MongoDB Atlas verbunden!'))
  .catch((err) => console.error('❌ Fehler bei der MongoDB-Verbindung:', err));

// Test-Route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Turkish Cuisine API läuft und ist mit MongoDB verbunden!' });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});