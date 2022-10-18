

const addOne = () => {
    return (dispatch) => {
        dispatch({
            type: 'INCREMENT'
        })
    }
}

const subtractOne = () => {
    return (dispatch) => {
        dispatch({
            type: 'DECREMENT'
        })
    }
}
export {addOne, subtractOne}