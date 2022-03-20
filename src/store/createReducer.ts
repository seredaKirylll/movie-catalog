import { Action } from './action'

export default function createReducer(initialState: object, handlers: any) {
    return function reducer(state: object = initialState, action: Action<any>) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}
