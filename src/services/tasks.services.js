const utils = require('../utils/tasks.dbOperationUtils');
const {InputError} = require('../errors/tasks.errors');

const createListService = async(newList) => {
    try{
        return await utils.createList(newList);
    } catch(err) {
        throw Error(err.message);
    }
}

const addTaskService = async (newTask) => {
    try{
        return await utils.createTask(newTask);
    } catch(err) {
        throw Error(err.message);
    }
}
const getAllListsService = async () => {
    try{
        let lists = await utils.getAllLists();
        // lists = lists.map((list) => {return {[list.id]: list.name}});
        return lists;
    } catch (err) {
        throw Error(err.message);
    }
}

const getTasksFromListService = async (listId) => {
    try{
        let tasks = await utils.getTasksFromList(parseInt(listId, 10));
        // tasks = tasks.map((task) => {return {[task.id] : task.title}});
        if(tasks.length === 0) throw new InputError('InputError', `No Tasks at that List ID!`, 400);
        return tasks;
    } catch (err) {
        throw err;
    }
}

const changeTaskService = async(taskDetails) => {
    try{
        let newtask = await utils.changeTask(taskDetails);
        return newtask;
    } catch (err) {
        throw err;
    }
}

const deleteTaskService = async(task) => {
    try{
        return await utils.deleteTask(task);
    } catch(err) {
        throw err;
    }
}

const deleteListService = async(listId) => {
    try{
        return await utils.deleteList(listId);
    } catch(err) {
        throw err;
    }
}

const getAllListsForUser = async(userId) => {
    try{
        const lists = await utils.getAllListsForUser(userId);
        return lists;
    } catch(err) {
        throw err;
    }
}

const addListForUser = async(givenDetails) => {
    return await utils.addListForUser(givenDetails);
}

module.exports = {
  addTaskService,
  createListService,
  getAllListsService,
  getTasksFromListService,
  changeTaskService,
  deleteTaskService,
  deleteListService,
  getAllListsForUser,
  addListForUser
};