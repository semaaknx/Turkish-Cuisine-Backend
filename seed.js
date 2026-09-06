const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');

const MONGO_URI = 'mongodb+srv://semaakinci_db_user:KmdNKrQfxvpACamt@cluster0.eewae2y.mongodb.net/turkish_cuisine?retryWrites=true&w=majority';

const sampleRecipes = [
  {
    title: 'Mercimek Çorbası',
    description: 'Klassische türkische Linsensuppe – cremig, herzhaft und perfekt als Vorspeise.',
    ingredients: ['200g rote Linsen', '1 Zwiebel', '1 Karotte', '1 Kartoffel', '1 EL Tomatenmark', '1.5l Gemüsebrühe', 'Butter und Paprikapulver für die Soße'],
    instructions: ['Gemüse würfeln und in etwas Öl anbraten.', 'Linsen und Brühe hinzugeben und 20 Minuten köcheln lassen.', 'Alles fein pürieren und mit Paprika-Butter servieren.'],
    category: 'Soups',
    cookingTime: 30,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=500'
  },
  {
    title: 'Karnıyarık',
    description: 'Auberginen gefüllt mit einer würzigen Hackfleisch-Mischung.',
    ingredients: ['4 Auberginen', '300g Hackfleisch', '1 Zwiebel', '2 Tomaten', '2 Spitzpaprika', 'Knoblauch, Salz, Pfeffer, Kreuzkümmel'],
    instructions: ['Auberginen streifig schälen und im Ofen oder der Pfanne weich braten.', 'Hackfleisch mit Zwiebeln, Knoblauch und Gewürzen anbraten.', 'Auberginen einschneiden, füllen und im Ofen bei 200°C backen.'],
    category: 'Main Dishes',
    cookingTime: 60,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?q=80&w=500'
  },
  {
    title: 'Baklava',
    description: 'Traditionelles Blätterteig-Gebäck gefüllt mit Pistazien und gezuckertem Sirup.',
    ingredients: ['1 Packung Yufka-Teigblätter', '250g geschmolzene Butter', '300g gehackte Pistazien', '300g Zucker', '200ml Wasser', '1 EL Zitronensaft'],
    instructions: ['Teigblätter schichten und mit Butter bestreichen, Pistazien dazwischen verteilen.', 'In Rauten schneiden und goldbraun backen.', 'Heißen Sirup aus Zucker und Wasser über das abgekühlte Baklava gießen.'],
    category: 'Desserts',
    cookingTime: 75,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=500'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Für Seeding mit MongoDB verbunden...');
    
    // Alte Daten löschen, damit nichts doppelt ist
    await Recipe.deleteMany({});
    console.log('🗑️ Alte Rezepte gelöscht.');

    // Neue Rezepte einfügen
    await Recipe.insertMany(sampleRecipes);
    console.log('🌱 3 türkische Rezepte erfolgreich in die Datenbank geladen!');

    mongoose.connection.close();
    console.log('🔌 Verbindung getrennt.');
  } catch (error) {
    console.error('❌ Fehler beim Seeding:', error);
  }
};

seedDB();