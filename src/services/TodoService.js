import request from '../api/index';
class TodoService {
    getAll() {
        return request.get("/todos");
    }
    get(id) {
        return request.get(`/todos/${id}`);
    }
    create(data) {
        return request.post("/todos", data);
    }
    update(id, data) {
        return request.put(`/todos/${id}`, data);
    }
    delete(id) {
        return request.delete(`/todos/${id}`);
    }
}
export default new TodoService();