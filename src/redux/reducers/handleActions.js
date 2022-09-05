const cart = [];

const processedRequest = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //first check if prod is in cart
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
            } else {
                const product = action.payload;
                return [
                    ...state, {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;
            case "DELITEM":
                const exists1 = state.find((x) => x.id === product.id);

                if (exists1.qty === 1) {
                    return state.filter((x) => x.id !== exists1.id)
                } else {
                    return state.map((x) => 
                        x.id === product.id ? {...x, qty: x.qty - 1} : x
                    );
                }
                break;

                case "AUTHENTICATE_FAILED":
                    let errorMessage =  action.payload;
                    return {
                            ...state,
                            errorMessage: errorMessage,
                            loginSuccess: false,
                            userDisplayName: null
                        };
                    break;

                case "AUTHENTICATE_SUCCESS":
                    let userDisplayName =  action.payload;
                    return {
                            ...state,
                            errorMessage: null,
                            loginSuccess: true,
                            userDisplayName: userDisplayName
                        };
                    break;
        default:
            return state;
            break;
    }
}
export default processedRequest


