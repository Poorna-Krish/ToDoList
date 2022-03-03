const services = require('./tasks.services');
const utils = require('../utils/tasks.dbOperationUtils');

describe('CreateListService Function', () => {
    it('should call util createList function', async () => {
        jest.spyOn(utils,'createList').mockImplementation(() => {return 1});
        expect(await services.createListService({})).toBe(1);
    });
    it('should throw error if some error', async () => {
        jest.spyOn(utils,'createList').mockRejectedValue(new Error('Some Error!'));
        try{
            await services.createListService({}); 
        } catch(err) {
            expect(err.message).toBe('Some Error!');
        }
    });
});
describe('AddTaskService Function', () => {
    it('should call util createTask function', async () => {
        jest.spyOn(utils,'createTask').mockImplementation(() => {return 1});
        expect(await services.addTaskService({})).toBe(1);
    });
    it('should throw error if some error', async () => {
        jest.spyOn(utils,'createTask').mockRejectedValue(new Error('Some Error!'));
        try{
            await services.addTaskService({}); 
        } catch(err) {
            expect(err.message).toBe('Some Error!');
        }
    });
});
describe('GetAllListsService Function', () => {
    const testList = [{id:1, name:'name1'},{id:2,name:'name2'}];
    const testResult = [{1: 'name1'},{2: 'name2'}];
    it('should call util getAllLists function', async () => {
        jest.spyOn(utils,'getAllLists').mockResolvedValue(testList);
        expect(await services.getAllListsService()).toEqual(testResult);
    });
    it('should throw error if some error', async () => {
        jest.spyOn(utils,'getAllLists').mockRejectedValue(new Error('Some Error!'));
        try{
            await services.getAllListsService({}); 
        } catch(err) {
            expect(err.message).toBe('Some Error!');
        }
    });
});
describe('GetTasksFromListService Function', () => {
    const testTasks = [{id: 1, title:'title1'},{id: 2, title:'title2'}];
    const testResultTasks = [{1: 'title1'}, {2: 'title2'}];
    it('should call util getTasksFromList function', async () => {
        jest.spyOn(utils,'getTasksFromList').mockResolvedValue(testTasks);
        expect(await services.getTasksFromListService(1)).toEqual(testResultTasks);
    });
    it('should throw error if some error', async () => {
        jest.spyOn(utils,'getTasksFromList').mockRejectedValue(new Error('Some Error!'));
        try{
            await services.getTasksFromListService({}); 
        } catch(err) {
            expect(err.message).toBe('Some Error!');
        }
    });
});
describe('ChangeTaskService Function', () => {
    const testTask = {listId: 1, id: 1, title: 'title1'};
    it('should call util changeTask function', async () => {
        jest.spyOn(utils,'changeTask').mockResolvedValue(testTask);
        expect(await services.changeTaskService(testTask)).toBe(testTask);
    });
    it('should throw error if some error', async () => {
        jest.spyOn(utils,'changeTask').mockRejectedValue(new Error('Some Error!'));
        try{
            await services.changeTaskService({}); 
        } catch(err) {
            expect(err.message).toBe('Some Error!');
        }
    });
});
describe('DeleteTaskService Function', () => {
    const testTask = {listId: 1, id: 1, title: 'title1'};
    it('should call util deleteTask function', async () => {
        jest.spyOn(utils,'deleteTask').mockResolvedValue(testTask);
        expect(await services.deleteTaskService(testTask)).toBe(testTask);
    });
    it('should throw error if some error', async () => {
        jest.spyOn(utils,'deleteTask').mockRejectedValue(new Error('Some Error!'));
        try{
            await services.deleteTaskService({}); 
        } catch(err) {
            expect(err.message).toBe('Some Error!');
        }
    });
});
describe('DeleteListService Function', () => {
    it('should call util deleteList function', async () => {
        jest.spyOn(utils,'deleteList').mockResolvedValue(1);
        expect(await services.deleteListService(1)).toBe(1);
    });
    it('should throw error if some error', async () => {
        jest.spyOn(utils,'deleteList').mockRejectedValue(new Error('Some Error!'));
        try{
            await services.deleteListService({}); 
        } catch(err) {
            expect(err.message).toBe('Some Error!');
        }
    });
});