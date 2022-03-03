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
        })
    } catch(err) {
        console.log(err.message);
        throw new Error(`Task Error: ${err.message}`);
    }
}

module.exports = {
    createTask,
    createList,
    getAllLists,
    getTasksFromList,
}