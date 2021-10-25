const Task = require('../models/Task');

/*
  POST '/' - createTask => adds a new task to the list
  GET '/' - getTasks => returns all tasks
  DELETE '/:id' - deleteTask => removes a task
  PUT '/:id' - editTask => updates a task
  DELETE '/' - clearTasks => removes all tasks
  GET '/:id' - getTask => returns 1 task
*/

const getTasks = async (req, res) => {
  //find is a QUERY
  //queries return the thing you are looking for
  const tasks = await Task.find({});
  //this is returned to the user as a JSON to be used with the data
  res.json({ method: req.method, tasks: tasks });
};

const createTask = async (req, res) => {
  //task.create is a method that adds the template object to the database
  //create is a METHOD not a query
  try {
    const task = await Task.create(req.body);
    res.json({ method: req.method, task: task, body: req.body });
  } catch (err) {
    res.json({ msg: 'your name is either too long or non-existent' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.json({ msg: `no item with id ${id}` });
    res.json({ method: req.method, task: task, id: id });
  } catch (err) {
    res.json({ msg: `no item with id ${id}` });
  }
};

const clearTasks = async (req, res) => {
  const deleted = await Task.deleteMany({});
  res.json({ method: req.method, deleted: deleted });
};

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) return res.json({ msg: `no items with id ${id}` });
    res.json({ method: req.method, task, id: id });
  } catch (err) {
    res.json({ msg: `no items with id ${id}` });
  }
};

const editTask = async (req, res) => {
  const { id } = req.params;
  console.log(req.body, id);
  try {
    const task = await Task.findByIdAndUpdate(id, req.body, {
      //task will equal the NEW task
      new: true, 
      //run validators check the new task against the model we created
      runValidators: true
    });
    if (!task) return res.json({ msg: `There is no task with the id of ${id}`});
    res.json({ method: req.method, task: task, body: req.body, id: id });
  } catch (err) {
    res.json({ msg: `There is no task with the id of ${id}`, err: err });
    console.error(err);
  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  clearTasks,
  getTask,
  editTask,
};
