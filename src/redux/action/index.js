//for adding a product item to the shopping cart

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}


export const authenticateFailed = (errorMessage) => {
    return {
        type: "AUTHENTICATE_FAILED",
        payload: errorMessage
    }
}


export const authenticateSuccess = (userDisplayName) => {
    return {
        type: "AUTHENTICATE_SUCCESS",
        payload: userDisplayName
    }
}
