import React from "react";
import CounterComponent from "./CounterComponent";

function HelloComponent(){
    const value = 'Chayyy 9 bảii'
    return (
        <div className="container">
            <h1>Hé Lô Quợt</h1>
            <CounterComponent propName={value}/>
        </div>
    );
}

export default HelloComponent;