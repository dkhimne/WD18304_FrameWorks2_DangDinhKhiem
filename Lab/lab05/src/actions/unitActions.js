import axios from "axios";

export const FETCH_UNITS_REQUEST = 'FETCH_UNITS_REQUEST';
export const FETCH_UNITS_SUCCESS = 'FETCH_UNITS_SUCCESS';
export const FETCH_UNITS_FAILURE = 'FETCH_UNITS_FAILURE';

export const fetchUnitsRequest = () => ({
    type: FETCH_UNITS_REQUEST
});

export const fetchUnitsSuccess = users => ({
    type: FETCH_UNITS_SUCCESS,
    payload: users
});

export const fetchUnitsFailure = error => ({
    type: FETCH_UNITS_FAILURE,
    payload: error
});



export const fetchUnits = () => {
    console.log(123)
    return dispatch => {
        console.log(123)
        dispatch(fetchUnitsRequest());
        axios.get('https://knowledgehub.demopolyct.online/api/unit')
            .then(response => {
                const users = response.data.data;
                dispatch(fetchUnitsSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUnitsFailure(errorMsg));
            });
    };
};

export const createUnit = (unitData) => {
    return (dispatch) => {
        dispatch(fetchUnitsRequest());
        return axios.post('https://knowledgehub.demopolyct.online/api/unit', unitData)
            .then(response => {
                const unit = response.data;
                dispatch(fetchUnitsSuccess(unit));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUnitsFailure(errorMsg));
                throw error;
            });
    };
};

export const updateUnit = (unitId, unitData) => {
    return (dispatch) => {
        dispatch(fetchUnitsRequest());
        return axios.put(`https://knowledgehub.demopolyct.online/api/unit/${unitId}`, unitData)
            .then(response => {
                const updatedUnit = response.data;
                dispatch(fetchUnitsSuccess(updatedUnit));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUnitsFailure(errorMsg));
            });
    };
};

export const deleteUnit = (unitId) => {
    return (dispatch) => {
        dispatch(fetchUnitsRequest());
        return axios.delete(`https://knowledgehub.demopolyct.online/api/unit/${unitId}`)
            .then(response => {
                dispatch(fetchUnitsSuccess(unitId));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUnitsFailure(errorMsg));
            });
    };
};
