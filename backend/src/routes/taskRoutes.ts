import express from 'express';
import * as taskController from '../controller/taskController'
const router = express.Router();

// get all tasks
router.get('/getTasks', 
   taskController.getTasks
);

// post tasks
router.post('/createTask', 
   taskController.createTask
);


export default router