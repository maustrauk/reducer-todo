export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = (taskObj) => {
    return ({
        type: ADD_TODO,
        payload: {
            task: taskObj.textInput,
            id: Date.now(),
            completed: false,
            done_at: 0,
            complete_by: taskObj.dateInput
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
                    completed: !item.completed,
                    done_at: Date.now()
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
