import * as db from '../database/index.js';
import { Router } from 'express';

const router = new Router()

export default router

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM players WHERE id = $1', [id])
  res.send(rows[0])
})

router.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM players')
    res.send(rows)
})

router.post('/', async (req, res) => {
    const { username } = req.body;
    // console.log(username);

    const { rows } = await db.query('INSERT INTO players(name,join_date) VALUES($1, now())', [username]);
    console.log(rows)
    res.send(rows)
})

// router.delete('/:id', async (req, res) => {
//     const { id } = req.params
//     const result = await db.query('DELETE FROM players WHERE id = $1', [id])
//     console.log(result);
//     res.send(rows[0])
//   })
