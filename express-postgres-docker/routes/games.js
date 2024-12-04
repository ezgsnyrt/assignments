import * as db from '../database/index.js';
import { Router } from 'express';

const router = new Router()

export default router

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM games WHERE id = $1', [id])
  res.send(rows[0])
})