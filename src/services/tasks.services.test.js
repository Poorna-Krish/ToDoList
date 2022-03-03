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
    it('should call util getAllLists function', async () => {
        jest.spyOn(utils,'getAllLists').mockResolvedValue();
        
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
    it('should call util getTasksFromList function', async () => {
        jest.spyOn(utils,'getTasksFromList').mockResolvedValue();
        
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