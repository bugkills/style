import { createStore } from 'redux';

export function formReduxer(state,action) {
    if(action.type === "INC")
    {
        return state+action.data
    }
    return state
}

export const store = createStore(formReduxer, 0);

store.subscribe(() => {
    console.log('dispatched', store.getState())
})