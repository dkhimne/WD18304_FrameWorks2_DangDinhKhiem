import {
    FETCH_UNITS_REQUEST,
    FETCH_UNITS_SUCCESS,
    FETCH_UNITS_FAILURE
} from '../actions/unitActions';

const initialState = {
    loading: false,
    units: [],
    error: ''
};

const unitReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UNITS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_UNITS_SUCCESS:
            return {
                loading: false,
                units: action.payload,
                error: ''
            };
        case FETCH_UNITS_FAILURE:
            return {
                loading: false,
                units: [],
                error: action.payload
            };
        default:
            return {
                ...state,
                loading: true
            };
    }
};

export default unitReducer;
