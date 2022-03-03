const express = require('express');
const router = express.Router();
const todoHandlers= require('../handlers/task.handlers');

router.get('/:id',todoHandlers.getTasksFromListHandler);
router.get('/', todoHandlers.getAllListsHandler);
router.post('/', todoHandlers.createListHandler);
router.post('/task', todoHandlers.addTaskHandler);
// router.put('/task/:id',tasksHandlers.changeNoteHandler);
// router.delete('/:id', tasksHandlers.deleteNoteHandler);

module.exports = {
    tasksRouters: router,
}