import Tasks from '../db/models/taskModel';
import TaskInterface from '../types/taskType';

const createTask = async (taskData: object): Promise<any[]> => {
   try {
      let task = new Tasks({ ...taskData });
      let data = await task.save();
      return data

   } catch (error: any) {
      console.log('Error: Services: createTask:', error);
      return error.message;
   }
}

const getTasks = async (): Promise<any[]> => {
   try {
      let data = await Tasks.find({}).skip(0).limit(10);
      return data;

   } catch (error: any) {
      console.log('Error: Services: getTasks:', error);
      return error.message;
   }
}


export { createTask, getTasks };