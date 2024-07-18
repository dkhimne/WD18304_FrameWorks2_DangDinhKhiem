import React , {useState} from 'react';
import EffectComponent from './EffectComponent';

function HookComponent(){
    const [count , setCount] = useState(0);
    return(
        <div>
            <p>Ban da~ click {count} lan`</p>
            <button className='btn btn-outline-secondary mb-3' onClick={()=> setCount(count + 21012004)}>lich' mi</button>
            <EffectComponent/>
        </div>
    )
}

export default HookComponent;