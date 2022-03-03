const services = require('../services/tasks.services.js');
const {InputError} = require('../errors/tasks.errors');

const getTasksFromListHandler = async(req, res) => {
    const id = req.params.id;
    try{
        const tasks = await services.getTasksFromListService(id);
        res.status(200).json(tasks);
    } catch (err) {
        console.log(`Error: ${err.message}, code: ${err.httpCode}`);
        res.status(err.httpCode).json({error: `There's something wrong! GetTasks Failed: \n Error: ${err.message}`});
    }
}
 
const getAllListsHandler = async (req, res) => {
    try{
        const lists = await services.getAllListsService();
        res.json(lists).status(200);
    } catch(err) {
        res.status(err.httpCode).json({error: `There's something wrong! GetLists Failed: \n Error: ${err.message}`});
    }
};
const createListHandler = async(req, res) => {
    if(req)
    {
        const newList = req.body;
        if(!newList) res.send(`Invalid, enter new list details in body!`).status(400);
        try{
            const newListId = await services.createListService(newList);
            res.json({success: `New List with Id ${newListId} created!`}).status(200);
        } catch(err) {
            res.json({error:`There's something wrong! List Failed: \n Error: ${err.message}`}).status(err.httpCode);
        }
    }
}
const addTaskHandler = async (req, res) => {
    if(req)
    {
        const newTaskDetails = req.body;
        try{
            const newTaskId = await services.addTaskService(newTaskDetails);
            res.status(200).json({success: `New note added Successfully in list ${newTaskDetails.listId} with ID: ${newTaskId}!`});
        } catch (err) {
            res.json({error: `There's something wrong! Task Failed: \n Error: ${err.message}`}).status(err.httpCode);
        }
    }
}

const changeTaskHandler = async(req, res) => {
    const taskDetails = req.body;
    try{
        const modifiedTask = await services.changeTaskService(taskDetails);
        res.json(modifiedTask[1]).status(200);
    } catch(err) {
        res.json({error:`There's something wrong! Task Failed: \n Error: ${err.message}`}).status(err.httpCode);
    }
}

const deleteTaskHandler = async (req, res) => {
    // const id = req.body.id;
    // await services.deleteNoteService(id);
    // res.send(`Note with id ${id} has been successfully deleted!`).status(200);
}

module.exports = {
    getTasksFromListHandler,
    getAllListsHandler,
    addTaskHandler,
    createListHandler,
    changeTaskHandler,
    deleteTaskHandler,
};