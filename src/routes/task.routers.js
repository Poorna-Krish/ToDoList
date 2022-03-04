const express = require('express');
const router = express.Router();
const userRouter = express.Router();

const todoHandlers= require('../handlers/task.handlers');

router.get('/:id',todoHandlers.getTasksFromListHandler);
router.get('/', todoHandlers.getAllListsHandler);
router.post('/', todoHandlers.createListHandler);
router.delete('/',todoHandlers.deleteListHandler);

router.post('/task', todoHandlers.addTaskHandler);
router.put('/task',todoHandlers.changeTaskHandler);
router.delete('/task',todoHandlers.deleteTaskHandler);

userRouter.get('/', todoHandlers.getAllListsForUser);
userRouter.post('/', todoHandlers.addListForUser);

module.exports = {
    tasksRouters: router,
    userRouters: userRouter
}