import express from 'express';

const router = express.Router();

// get tasks
router.get('/', (req, res) => {
   res.status(200).json({ user: 'none' });
});

// post tasks


export default router