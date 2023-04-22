import React, {useState} from "react";
import './ItemCount.css'

export const ItemCount = () =>{

    const [counter, setCounter] = useState(0);

    const sumar = () =>{
      setCounter(counter + 1);
    }

    const restar = () =>{
      setCounter(counter > 0 ? counter - 1 : 0);
    }

    const resetear = ()=>{
        setCounter(0)
    }

    return(
      <div className="contador">
          <button className="btn-contador" onClick={restar}>➖</button>
          <div className="txt-contador">Cantidad: {counter}</div>
          <button className="btn-contador" onClick={sumar}>➕</button>
          
          <button className="btn-contador" onClick={resetear}>🔄</button>
      </div>
    )
}