const taskService = require('../services/tasks.services.js');

// const getNoteByIdHandler = async(req, res) => {
//     const id = req.params.id;
//     res.status(200).json(await taskService.getNoteByIdService(id));
// }
 
// const getNotesHandler = async (req, res) => {
//     const notes = await taskService.getNotesService();
//     res.json(notes).status(200);
// };

const createTaskHandler = async (req, res) => {
    const newNote = req.body;
    res.set('content-type', 'text/plain');
    const newNoteID = await taskService.createTaskService(newNote);
    res.send(`New note added Successfully with ID: ${newNoteID}!`).status(200);
}

// const changeNoteHandler = async(req, res) => {
//     const id = req.params.id;
//     const newNoteDetails = req.body;
//     const newNote = await taskService.changeNoteService(id, newNoteDetails);
//     res.send(`Note with ID ${id} changed successfully!`).status(200);
// }

// const deleteNoteHandler = async (req, res) => {
//     const id = req.params.id;
//     await taskService.deleteNoteService(id);
//     res.send(`Note with id ${id} has been successfully deleted!`).status(200);
// }
module.exports = {
    // getNoteByIdHandler,
    // getNotesHandler,
    createTaskHandler,
    // changeNoteHandler,
    // deleteNoteHandler,
}