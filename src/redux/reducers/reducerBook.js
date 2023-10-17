import { bookingTypes } from "../types/typesBook";


const bookingOneState = {
   bookingOne : []
}

export const bookingReducer = (state = bookingOneState, action) => {
    switch (action.type) {
        case bookingTypes.GET_BOOKING_ONE:
            return{
                ...state,
                bookingOne: action.payload.bookingOne
            };
        case bookingTypes.ADD_BOOKING_ONE:
            return {
                ...state,
                bookingOne: [...state.bookingOne, action.payload],
            };
        default:
            return state;
    };
}