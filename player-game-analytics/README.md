# PostgreSQL Assignment: Player and Game Analytics

## Overview
Test your PostgreSQL skills by analyzing a database with players, games, and scores. Use commands like `JOIN`, `GROUP BY`, and `ORDER BY` to generate reports.

## Database Structure
The database includes:
1. **Players**: Player info (`id`, `name`, `join_date`).
2. **Games**: Game details (`id`, `title`, `genre`).
3. **Scores**: Player scores (`id`, `player_id`, `game_id`, `score`, `date_played`).

## Setup
1. Run PostgreSQL and pgAdmin with Docker.
2. Create tables and insert sample data.

## Tasks
1. **List Players and Scores**: Use `INNER JOIN` to display player names, game titles, and scores.
2. **Find High Scorers**: Use `GROUP BY` and `ORDER BY` to get the top 3 players by total score.
3. **Players Without Games**: Use `LEFT OUTER JOIN` to find players who haven’t played any games.
4. **Popular Genres**: Use `GROUP BY` and `COUNT()` to find the most popular game genre.
5. **Recent Players**: Use `WHERE` to find players who joined in the last 30 days.

### Bonus Task
- **Favorite Games**: Use `JOIN` and `GROUP BY` to find each player's most-played game.