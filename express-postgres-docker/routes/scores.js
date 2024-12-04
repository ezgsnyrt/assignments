import * as db from '../database/index.js';
import { Router } from 'express';

const router = new Router()

export default router

router.post('/:id', async (req, res) => {
  const { player_id } = req.body
  const { game_id } = req.body
  const { score } = req.body
  const { rows } = await db.query('INSERT INTO scores(player_id, game_id, score, date_played) VALUES($1, now())', [player_id])
  res.send(rows[0])
})