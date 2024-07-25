import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnits } from "../actions/unitActions";

const UnitList = () => {
    const dispatch = useDispatch();
    const unitState = useSelector(state => state.unit);

    useEffect(() => {
        dispatch(fetchUnits());
    }, [dispatch]);

    if (unitState.loading) {
        return (
            <p>loading</p>
        )
    }
    if (unitState.error) {
        return (
            <p>Err: {unitState.error}</p>
        )
    }

    return (
        <div>
            {unitState.units.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    )

}

export default UnitList;