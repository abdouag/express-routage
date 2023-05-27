const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to check if it's working hours
app.use((req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send("Désolé, notre application n'est disponible que du lundi au vendredi, de 9h à 17h.");
    }
});

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/Contactez-nous', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(3003, function () {
    console.log("Le serveur est en marche");
});
