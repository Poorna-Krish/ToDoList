const handlers = require('./task.handlers');
const services = require('../services/tasks.services');

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
const testListReq = {body: {name:'list name'}};
describe('CreateListHandler Function', () => {
    it('should return success message with status 200 if list created', async () => {
        jest.spyOn(services,'createListService').mockResolvedValue(1);
        const res = mockResponse();
        await handlers.createListHandler(testListReq,res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({success: `New List with Id 1 created!`});
    });
    it('should return error if some other error occurs', async() => {
        jest.spyOn(services,'createListService').mockRejectedValue(new Error(`List create failed!`));
        const res = mockResponse();
        try{
            await handlers.createListHandler(testListReq,res);
        } catch (err) {
            expect(res.status).toHaveBeenCalledWith(err.httpCode);
            expect(res.json).toHaveBeenCalledWith({error:`There's something wrong! List Failed: \n Error: ${err.message}`});
        }
    });
});
const testTaskReq = {body: {listId: 1, title: 'Task title'}};
describe('AddTaskHandler Function', () =>{
    it('should return success message with status 200 if task created', async () => {
        jest.spyOn(services,'addTaskService').mockResolvedValue(1);
        const res = mockResponse();
        await handlers.addTaskHandler(testTaskReq,res);
        expect(res.json).toHaveBeenCalledWith({success: `New note added Successfully in list 1 with ID: 1!`});
        expect(res.status).toHaveBeenCalledWith(200);
    });
    it('should return error if some other error occurs', async() => {
        jest.spyOn(services,'addTaskService').mockRejectedValue(new Error(`Task create failed!`));
        const res = mockResponse();
        try{
            await handlers.addTaskHandler(testTaskReq, res);
        } catch (err) {
            expect(res.status).toHaveBeenCalledWith(err.httpCode);
            expect(res.json).toHaveBeenCalledWith({error: `There's something wrong! Task Failed: \n Error: ${err.message}`});
        }
    });
});
describe('GetAllListsHandler Function', () =>{
    it('should return success message with status 200 if task created', async () => {
        jest.spyOn(services,'getAllListsService').mockResolvedValue({obj: 1});
        const res = mockResponse();
        await handlers.getAllListsHandler(null,res);
        expect(res.json).toHaveBeenCalledWith({obj: 1});
        expect(res.status).toHaveBeenCalledWith(200);
    });
    it('should return error if some other error occurs', async() => {
        jest.spyOn(services,'getAllListsService').mockRejectedValue(new Error(`Some error`));
        const res = mockResponse();
        try{
            await handlers.getAllListsHandler(null, res);
        } catch (err) {
            expect(res.status).toHaveBeenCalledWith(err.httpCode);
            expect(res.json).toHaveBeenCalledWith({error: `There's something wrong! GetLists Failed: \n Error: Some error`});
        }
    });
});
describe('GetTasksFromListHandler Function', () => {
    it('should return success message with status 200 if task created', async () => {
        jest.spyOn(services,'getTasksFromListService').mockResolvedValue({obj: 1});
        const res = mockResponse();
        await handlers.getTasksFromListHandler({params:{id: 1}},res);
        expect(res.json).toHaveBeenCalledWith({obj: 1});
        expect(res.status).toHaveBeenCalledWith(200);
    });
    it('should return error if some other error occurs', async() => {
        jest.spyOn(services,'getTasksFromListService').mockRejectedValue(new Error(`Some error`));
        const res = mockResponse();
        try{
            await handlers.getTasksFromListHandler({params:{id: 1}}, res);
        } catch (err) {
            expect(res.status).toHaveBeenCalledWith(err.httpCode);
            expect(res.json).toHaveBeenCalledWith({error: `There's something wrong! GetTasks Failed: \n Error: Some error`});
        }
    });
});
describe('ChangeTaskHandler Function', () => {
    it('should return success message with status 200 if task created', async () => {
        jest.spyOn(services,'changeTaskService').mockResolvedValue({listId: 1, id: 1});
        const res = mockResponse();
        const req = {body: {listId: 1, id: 1}};
        await handlers.changeTaskHandler(req,res);
        expect(res.json).toHaveBeenCalledWith({success:`Task from List 1 with ID 1 changed successfully!`});
        expect(res.status).toHaveBeenCalledWith(200);
    });
    it('should return error if some other error occurs', async() => {
        jest.spyOn(services,'changeTaskService').mockRejectedValue(new Error(`Some error`));
        const res = mockResponse();
        const req = {body: {listId: 1, id: 1}};
        try{
            await handlers.changeTaskHandler(req, res);
        } catch (err) {
            expect(res.status).toHaveBeenCalledWith(err.httpCode);
            expect(res.json).toHaveBeenCalledWith({error: `There's something wrong! GetTasks Failed: \n Error: Some error`});
        }
    });
});