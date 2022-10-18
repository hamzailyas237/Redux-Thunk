
const INITIAL_STATE = {
    globalCount: 0
}


const AddCounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                globalCount: ++state.globalCount
            }
        default:
            return {
                ...state
            }
    }
}

const SubtractCounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
                globalCount: --state.globalCount
            }
        default:
            return {
                ...state
            }
    }
}

export { AddCounterReducer, SubtractCounterReducer };