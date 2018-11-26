const shopReducer = ( state = {}, action) => {
    switch(action.type){
        case 'SET_SHOP':
        return {
            ...state,
            shop: action.shop
        }
        default:
            return state
    }
}
export default shopReducer