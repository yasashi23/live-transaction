import React from 'react'

export default function Transaction({uang,keterangan,jam,aliran}) {

    function warnaAliran(){
        if(aliran == "masuk"){
            return "#37C48F"
        }else{
            return "#FF667A"
        }
    }
  return (
    <div className='container__money-transaction'>
        <div className="container__keterangan">
            <h5>{keterangan}</h5>
            <p>{jam}</p>
        </div>
        <h3 style={{color:warnaAliran()}}>{uang.toLocaleString()}</h3>
    </div>
  )
}
