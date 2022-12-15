export const removeItem = (data) => (dispatch) => {
    dispatch({type: "remove_item", payload: data})
}

export const addQty = (data) => (dispatch) => {
    dispatch({type: "add_qty", payload: data})
}

export const decreaseQty = (data) => (dispatch) => {
    dispatch({type: "decrease_qty", payload: data})
}

export const addWhislist = (data) => (dispatch) => {
    dispatch({type: "add_whislist", payload: data})
}