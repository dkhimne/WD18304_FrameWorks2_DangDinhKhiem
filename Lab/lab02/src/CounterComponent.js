import React , {useState} from "react";

function CounterComponent(props){
    const [count, setCount] = useState(0);

    return (
        <div className="container"> 
            <h3>Hi {props.propName}</h3>
            <p className="input-group"> You clicked ~ <p className="text-danger"> {count} </p> ~ times </p>
            <button className="btn btn-danger mb-3" onClick={()=> setCount(count + 1)}>Lích mi</button>
        </div>
    )
}

export default CounterComponent;