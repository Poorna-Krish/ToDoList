const dbOperations = require('../utils/notes.DbOperationUtils');

const createTaskService = async (note) => {
    try{
        await dbOperations.createNote(note);
    } catch(err) {
        throw Error(err.message);
    }
}
// const getNotesService = async () => await dbOperations.getNotes();

// const getNoteByIdService = async (id) => await dbOperations.getNoteById(id);
// const changeNoteService = async(id, newNoteDetails) => await dbOperations.changeNote(id, newNoteDetails);
// const deleteNoteService = async(id) => await dbOperations.deleteNote(id);

module.exports = {
  createTaskService,
//   getNotesService,
//   getNoteByIdService,
//   changeNoteService,
//   deleteNoteService,
};