/*
  post '/' -createTask => adds a new task to the list
  get '/' - getTask => returns all tasks
  delete '/:id' - removeTask => removes a task
  put '/:id' - editTask => updates a task
  delete '/' -clearTasks => removes all tasks
  get '/:id' - getTask => returns 1 task
*/

const express = require('express');
const router = express.Router();

const {
  getTasks,
  createTask,
  removeTask,
  editTask,
  clearTasks,
  getTask,
} = require('../controllers/tasksCon');

router.route('/').get(getTasks).post(createTask).delete(clearTasks);

router.route('/:id').get(getTask).delete(removeTask).put(editTask);

module.exports = router;
