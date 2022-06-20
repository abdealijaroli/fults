import * as taskService from "../services/taskService";
import express, { Express, Request, Response } from 'express'

const createTask = async (req: Request, res: Response): Promise<void> => {
   try {
      let taskData = req.body;
      await taskService.createTask(taskData);
      res.status(200).json({ message: 'Task created successfully' });
   } catch (error) {
      console.log('Error: Controllers: createTask:', error);
      res.status(500).json({ message: 'Error creating task' });
   }
}

const getTasks = async (req: Request, res: Response): Promise<void> => {
   try {
      const data = await taskService.getTasks();
      res.status(200).json(data);
   } catch (error) {
      console.log('Error: Controllers: getTasks:', error);
      res.status(500).json({ message: 'Error getting tasks' });
   }
}

export { createTask, getTasks }