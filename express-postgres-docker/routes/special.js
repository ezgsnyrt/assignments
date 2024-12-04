import * as db from '../database/index.js';
import { Router } from 'express';

const router = new Router()

export default router

// List All Players and Their Scores
router.get('/players-scores', async (req, res) => {
  const { rows } = await db.query(`
    SELECT name, title, score FROM players
        INNER JOIN scores ON scores.player_id = players.id
        INNER JOIN games ON scores.game_id = games.id
        `)
  res.send(rows)
})

// Find High Scorers
router.get('/top-players', async (req, res) => {
    const { rows } = await db.query(`
        SELECT * FROM
            (SELECT name, SUM(score) AS total_score FROM players
                INNER JOIN scores ON scores.player_id = players.id
                GROUP BY player_id, name) AS top_players
                ORDER BY total_score DESC
                LIMIT 3
            `)
    res.send(rows)
  })

// Players Who Didn’t Play Any Games
  router.get('/inactive-players', async (req, res) => {
    const { rows } = await db.query(`
        SELECT * FROM players
            WHERE players.id NOT IN (
                SELECT player_id FROM scores)
            `)
    res.send(rows)
  })

// Find Popular Game Genres
  router.get('/popular-genres', async (req, res) => {
    const { rows } = await db.query(`
        SELECT * FROM
            (SELECT genre, COUNT(*) AS number_of_times FROM games
                INNER JOIN scores ON scores.game_id = games.id
                GROUP BY game_id, genre) AS popular_genres
                ORDER BY number_of_times DESC
            `)
    res.send(rows)
  })

// Recently Joined Players in the last 30 days
router.get('/recent-players', async (req, res) => {
    const { rows } = await db.query(`
        SELECT name, join_date FROM players
            INNER JOIN scores ON scores.player_id = players.id
            INNER JOIN games ON scores.game_id = games.id
            WHERE players.join_date >= CURRENT_DATE - INTERVAL '30 days';
            `)
    res.send(rows)
})

// Players' Favorite Games
router.get('/favorite-games', async (req, res) => {
    const { rows } = await db.query(`
        SELECT
            players.name AS player_name,
            games.title AS favorite_game,
            COUNT(scores.id) AS play_count
        FROM players
        INNER JOIN scores ON scores.player_id = players.id
        INNER JOIN games ON scores.game_id = games.id
        GROUP BY players.id, games.id
        HAVING COUNT(scores.id) = (
            SELECT MAX(game_play_count)
            FROM (
                SELECT COUNT(s.id) AS game_play_count
                FROM scores s
                WHERE s.player_id = players.id
                GROUP BY s.game_id
            ) subquery
        )
        ORDER BY players.name;
        `)
    res.send(rows)
})