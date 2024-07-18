import React, { useState, useEffect } from "react";

function EffectComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('nhonhaquadi');
        const handleResize = () => {
            console.log('Window resized');
        };
        window.addEventListener('resize', handleResize);

        return () => {
            console.log('Chỉ gọi 1 lần sau lần render đầu tiên ');
            window.removeEventListener('resize', handleResize);
        }
    }, [count]);

    return (
        <div>
            <i className="d-flex justify-content-center">CoUnT : <p className="text-warning">{count}</p></i>
            <button className="btn btn-outline-info mb-3 " onClick={() => setCount(count + 10)}>Click se tang len</button>
            <div>
                <i>Check trong console please!</i>
            </div>
        </div>
    )
}

export default EffectComponent;