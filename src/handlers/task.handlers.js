const services = require('../services/tasks.services.js');
const {InputError, NotFoundError} = require('../errors/tasks.errors');

const getTasksFromListHandler = async(req, res) => {
    const id = req.params.id;
    console.log(id);
    try{
        const tasks = await services.getTasksFromListService(id);
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err.message, ' ', err.httpCode);
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
        const newList = req.body;
        if(!newList) res.send(`Invalid, enter new list details in body!`).status(400);
        try{
            const newListId = await services.createListService(newList);
            res.json({success: `New List with Id ${newListId} created!`, newListId}).status(200);
    } catch(err) {
        res.json({error:`There's something wrong! List Failed: \n Error: ${err.message}`}).status(err.httpCode);
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
        if(modifiedTask[1].length === 0) res.json({message: `No task with that Id or listId!`}).status(400);
        else res.json(modifiedTask[1]).status(200);
    } catch(err) {
        res.json({error:`There's something wrong! Task Failed: \n Error: ${err.message}`}).status(err.httpCode);
    }
}

const deleteTaskHandler = async (req, res) => {
    const taskDetails = req.body;
    try{
        const deleted = await services.deleteTaskService(taskDetails);
        if(deleted === 0) res.json({message: `No task with that ID!`});
        else res.json({deletedTask: `Deleted Task with Id ${taskDetails.id}!`}).status(200);
    } catch(err) {
        res.json({error:`There's something wrong! Task Failed: Error: ${err.message}`}).status(err.httpCode);
    }
}

const deleteListHandler = async(req, res) => {
    const listId = req.body.id;
    try{
        await services.deleteListService(listId);
        res.json({deletedList: `Deleted List with Id ${listId}!`}).status(200);
    } catch(err) {
        res.json({error:`There's something wrong! List Failed: Error: ${err.message}`}).status(err.httpCode);
    }
}

const getAllListsForUser = async (req, res) => {
    const userId = req.body.userId;
    try{
        const lists = await services.getAllListsForUser(userId);
        res.json(lists).status(200);
    } catch(err) {
        res.json({error: `There's something wrong! Error: ${err.message}`}).status(400);
    }
}

const addListForUser = async(req, res) => {
    try{
        if(!req.body) throw new InputError('InputError','Invalid request body!',400);
        if(!req.body.listId) throw new InputError('InputError','Invalid list Id!',400);
        if(!req.body.userId) throw new InputError('InputError','Invalid user Id!',400);
        if(typeof req.body.listId !== 'number') throw new InputError('InputError','Invalid list Id!',400);
        if(typeof req.body.userId !== 'number') throw new InputError('InputError','Invalid user Id!',400);
        const list = await services.addListForUser(req.body);
        res.json(list).status(200);
    } catch(err) {
        res.json({error: `There's something wrong! Error: ${err.message}`}).status(400);
    }
}

module.exports = {
    getTasksFromListHandler,
    getAllListsHandler,
    addTaskHandler,
    createListHandler,
    changeTaskHandler,
    deleteTaskHandler,
    deleteListHandler,
    getAllListsForUser,
    addListForUser
};