import t_shirt from '../../assets/images/t-shirt1.jpg'
import t_shirt_2 from '../../assets/images/image2.jpg'

const initialState = {
    cart: [
        {
            id: 1011,
            item_name: "Gojou T-Shirt",
            color: 'White',
            qty: 2,
            size: 'M',
            price: 99000,
            image: t_shirt,
            like: 0,
        },
        {
            id: 1012,
            item_name: "One Piece T-Shirt",
            color: 'White',
            qty: 1,
            size: 'L',
            price: 85000,
            image: t_shirt_2,
            like: 0
        },

    ],
}

const cartReducer = (state = initialState, actions) => {
    let tempItem = [];
    switch (actions.type) {

        case "remove_item":
            tempItem = state.cart.filter((item) => item.id !== actions.payload.id)
            return {
                ...state,
                cart: tempItem
            }
        case "add_qty":
            tempItem = state.cart.map((item) => {
                if (item.id === actions.payload.id) {
                    item.qty += 1
                }
                return item

            })
            return {
                ...state,
                cart: tempItem
            }
        case "decrease_qty":
            tempItem = state.cart.map((item) => {
                if (item.id === actions.payload.id) {
                    item.qty -= 1
                }
                return item

            })
            return {
                ...state,
                cart: tempItem
            }
        case "add_whislist":
            tempItem = state.cart.map((item) => {
                if (item.id === actions.payload.id) {
                    item.like = !item.like
                }
                return item

            })
            return {
                ...state,
                cart: tempItem
            }
        default:
            return state;
    }
}

export default cartReducer