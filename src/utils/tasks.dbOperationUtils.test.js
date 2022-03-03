const utils = require('./tasks.dbOperationUtils');
const {Tasks,Lists} = require('../../models');

describe('CreateList Function', () => {
    const testList = {name: 'Dummy list'};
    it('should return new list ID', async () => {
        jest.spyOn(Lists,'create').mockResolvedValue({id:1});
        expect(await utils.createList(testList)).toBe(1);
    });
    it('should return error if no input given', async () => {
        try{
            await utils.createList();
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid list data!');
        }
    });
    it('should return error if list name not given', async () => {
        try{
            await utils.createList({val: 0});
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid list name!');
        }
    });
    it('should return error if list name not string', async () => {
        try{
            await utils.createList({name: 0});
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid list name!');
        }
    });
    it('should return error if other internal/query', async () => {
        jest.spyOn(Lists,'create').mockRejectedValue(new Error('Some error!'));
        try{
            await utils.createList(testList);
        } catch(err) {
            expect(err.message).toBe('List Error: Some error!');
        }
    });
});
describe('CreateTask Function', () => {
    const testTask = {listId: 1, title: 'Dummy task'};
    it('should return new task ID', async () => {
        jest.spyOn(Tasks,'create').mockResolvedValue({id:1});
        expect(await utils.createTask(testTask)).toBe(1);
    });
    it('should return error if no input given', async () => {
        try{
            await utils.createTask();
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid task details!');
        }
    });
    it('should return error if Task title not given', async () => {
        try{
            await utils.createTask({val: 0});
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid task title!');
        }
    });
    it('should return error if Task title not string', async () => {
        try{
            await utils.createTask({title: 5});
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid task title!');
        }
    });
    it('should return error if list Id not given', async () => {
        try{
            await utils.createTask({title: 'dummy title'});
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid list Id!');
        }
    });
    it('should return error if list Id not number', async () => {
        try{
            await utils.createTask({title:'dummy title', listId: 'dummy id'});
        } catch(err) {
            expect(err.message).toBe('Invalid, enter valid List Id!');
        }
    });
    it('should return error if other internal/query', async () => {
        jest.spyOn(Tasks,'create').mockRejectedValue(new Error('Some error!'));
        try{
            await utils.createTask(testTask);
        } catch(err) {
            expect(err.message).toBe('Task Error: Some error!');
        }
    });
});

describe('GetAllLists function', () => {
    it('should return all the Lists in an array', async() =>{
        jest.spyOn(Lists,'findAll').mockResolvedValue([1,2,3]);
        expect(await utils.getAllLists()).toEqual([1,2,3]);
    });
    it('should throw error if some internal error', async () => {
        jest.spyOn(Lists,'findAll').mockRejectedValue(new Error('Some error!'));
        try{
            await utils.getAllLists();
        } catch(err) {
            expect(err.message).toBe('List Error: Some error!');
        }
    })
});

describe('ChangeTask Function', () => {
    const testTask = {id: 1, listId: 1, title: 'title1'};
    it('should return modified task if changed', async () => {
        jest.spyOn(Tasks,'update').mockResolvedValue(testTask);
        expect(await utils.changeTask(testTask)).toBe(testTask);
    });
    it('should return error if input not given', async () => {
        try{
            await utils.changeTask();
        }catch(err) {
            expect(err.message).toBe('Invalid, enter valid task details!');
        }
    });
    it('should return error if task Id not given', async () => {
        try{
            await utils.changeTask({listId: 1, title: 'title1'});
        }catch(err) {
            expect(err.message).toBe('Invalid, enter valid task details!');
        }
    });
    it('should return error if list Id not given', async () => {
        try{
            await utils.changeTask({id: 1, title: 'title1'});
        }catch(err) {
            expect(err.message).toBe('Invalid, enter valid task details!');
        }
    });
    it('should return error if task title not given', async () => {
        try{
            await utils.changeTask({id: 1, listId: 1});
        }catch(err) {
            expect(err.message).toBe('Invalid, enter valid task details!');
        }
    });
    it('should return error if task Id not number', async () => {
        try{
            await utils.changeTask({id: 'hi', listId: 1, title: 'title1'});
        }catch(err) {
            expect(err.message).toBe('Invalid, task Id and list Id must be integer!');
        }
    });
    it('should return error if list Id not number', async () => {
        try{
            await utils.changeTask({listId: 'hi', id: 1, title: 'title1'});
        }catch(err) {
            expect(err.message).toBe('Invalid, task Id and list Id must be integer!');
        }
    });
    it('should return error if task title not string', async () => {
        try{
            await utils.changeTask({id: 1, listId: 1, title: 1});
        }catch(err) {
            expect(err.message).toBe('Invalid, task title must be string!');
        }
    });
    it('should return error if other internal error', async () => {
        jest.spyOn(Tasks,'update').mockRejectedValue(new Error('Some error!'));
        try{
            await utils.changeTask(testTask);
        } catch(err) {
            expect(err.message).toBe(`Task Error: Some error!`);
        }
    });
})