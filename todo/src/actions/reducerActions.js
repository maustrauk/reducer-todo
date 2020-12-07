export const ADD_TODO = "ADD_TODO";

export const addTodo = (task) => {
    return ({
        type: ADD_TODO,
        payload: {
            task: task,
            id: Date.now(),
            completed: false
        }
    })
}