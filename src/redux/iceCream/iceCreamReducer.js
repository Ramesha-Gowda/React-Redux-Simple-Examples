import { BUY_ICECREAM } from './iceCreamType'

const intialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = intialState, action) => {
    debugger
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        default: return state
    }
}
export default iceCreamReducer