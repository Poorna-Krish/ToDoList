const {Lists, Tasks} = require('../../models');
const {InputError} = require('../errors/tasks.errors');

const createList = async(newListDetails) => {
    if(!newListDetails) throw new InputError('InputError','Invalid, enter valid list data!', 400);
    else{
        if(!newListDetails.name) throw new InputError('InputError','Invalid, enter valid list name!', 400);
        else if(typeof newListDetails.name !== 'string') throw new InputError('InputError','Invalid, enter valid list name!', 400);
        try{
            const newList = await Lists.create({name: newListDetails.name});
            return newList.id;
        } catch (err) {
            throw new Error(`List Error: ${err.message}`);
        }
    }
}

const createTask = async(task) => {
    if(!task) throw new InputError('InputError','Invalid, enter valid task details!', 400);
    if(!task.title) throw new InputError('InputError','Invalid, enter valid task title!', 400);
    else if(typeof task.title !== 'string') throw new InputError('InputError','Invalid, enter valid task title!', 400);
    if(!task.listId) throw new InputError('InputError','Invalid, enter valid list Id!', 400);
    else if(typeof task.listId !== 'number') throw new InputError('InputError','Invalid, enter valid List Id!', 400);
    try{
        const newTask = await Tasks.create({ listId: task.listId, title: task.title});
        return newTask.id;
    } catch(err) {
        throw new Error(`Task Error: ${err.message}`);
    }
};

const getAllLists = async () => {
    try{
        return await Lists.findAll();
    } catch(err) {
        throw new Error(`List Error: ${err.message}`);
    }
}

const getTasksFromList = async(searchListId) => {
    try{
        return await Tasks.findAll({
            where:{
                listId: searchListId
            }
        });
    } catch(err) {
        throw new Error(`Task Error: ${err.message}`);
    }
}

const changeTask = async (taskDetails) => {
    if(!taskDetails) throw new InputError('InputError','Invalid, enter valid task details!', 400);
    if(!taskDetails.id || !taskDetails.listId || !taskDetails.title) throw new InputError('InputError','Invalid, enter valid task details!', 400);
    if(typeof taskDetails.id !== 'number' || typeof taskDetails.listId !== 'number') throw new InputError('InputError','Invalid, task Id and list Id must be integer!', 400);
    if(typeof taskDetails.title !== 'string') throw new InputError('InputError','Invalid, task title must be string!', 400);
    try{
        const task = await Tasks.update({ title: taskDetails.title }, {
            where: {
              id: taskDetails.id,
              listId: taskDetails.listId
            },
            returning: true,
        });
        return task;
    } catch (err) {
        throw new Error(`Task Error: ${err.message}`);
    }
}

const deleteTask = async (taskDetails) => {
    if(!taskDetails) throw new InputError('InputError','Invalid, enter valid task details!', 400);
    if(!taskDetails.id) throw new InputError('InputError','Invalid, enter valid task details!', 400);
    if(typeof taskDetails.id !== 'number') throw new InputError('InputError','Invalid, task Id and list Id must be integer!', 400);
    try{
        const deletedTask = await Tasks.destroy({
            where: {
              id: taskDetails.id,
            }
          });
        return deletedTask;
    } catch (err) {
        throw new Error(`Task Error: ${err.message}`);
    }
}
module.exports = {
    createTask,
    createList,
    getAllLists,
    getTasksFromList,
    changeTask,
    deleteTask
};