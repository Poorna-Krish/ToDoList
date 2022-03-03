const express = require('express');
const router = express.Router();
const tasksHandlers= require('../handlers/tasks.handlers');

// router.get('/',notesHandlers.getNotesHandler);
// router.get('/:id', notesHandlers.getNoteByIdHandler);
router.post('/', tasksHandlers.createTaskHandler);
// router.put('/:id',tasksHandlers.changeNoteHandler);
// router.delete('/:id', tasksHandlers.deleteNoteHandler);

module.exports = {
    tasksRouters: router,
}