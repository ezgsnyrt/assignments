import express from 'express'
import games from './routes/games.js';
import players from './routes/players.js';
import special from './routes/special.js';

const PORT = 3000;

const app = express()
app.use(express.json())

app.use('/games', games)
app.use('/players', players)
app.use('/', special)

// etc..

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})