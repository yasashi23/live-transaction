import React from 'react'

export default function BtnTransaction({setDisplay,targetRef,checked}) {
    function onclick(){
        setDisplay("")
        const clickInput = checked.current
        if(clickInput){
          clickInput.click()
        }
        targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  return (
    <div className='container__button'>
        <button onClick={onclick}>Tambah Transaksi</button>
        <p>Created by ybriliant</p>
    </div>
  )
}
