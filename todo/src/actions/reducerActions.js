export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = (task) => {
    return ({
        type: ADD_TODO,
        payload: {
            task: task,
            id: Date.now(),
            completed: false
        }
    });
}

export const toggleTodo = (itemId, state) => {
    return ({
        type: TOGGLE_TODO,
        payload: state.map(item => {
            if (itemId === item.id) {
                return ({
                    ...item,
                    completed: !item.completed
                });
            } else {
                return (item);
            }
         })
    });
}

export const clearCompleted = (state) => {
    return ({
        type: CLEAR_COMPLETED,
        payload: state.filter(item => !item.completed)
    });
}