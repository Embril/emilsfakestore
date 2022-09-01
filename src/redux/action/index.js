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