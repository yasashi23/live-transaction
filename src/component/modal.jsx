import React from 'react'
import { useState } from 'react'
import Transaction from './transaction'

export default function Modal({display,setDisplay,addTransaction,checked}) {
    const [inputUang,setInputUang] = useState("")
    const [inputUangFullNumber,setInputUangFullNumber] = useState("")
    const [inputKeterangan,setInputKeterangan]=useState("")
    const classModal = `container__modal ${display}`
    
    function dateNow(){
        const date = new Date()
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        return `${formattedHours}:${formattedMinutes}`
    }

    function onclickClose(e){
        e.preventDefault()
        setInputKeterangan("")
        setInputUang("")
        setInputUangFullNumber("")
        console.table({inputKeterangan,inputUang,inputUangFullNumber})
        setDisplay("off")
    }
    function onchangeInput(e){
        const cleanedValue = e.target.value.replace(/\D/g, '');
        const hasil = String(formatToRupiah(cleanedValue))
        if(cleanedValue.length !==0){
            setInputUang(hasil)
            setInputUangFullNumber(cleanedValue)

        }
    }
    function formatToRupiah(angka) {
        let reverse = angka.toString().split('').reverse().join('');
        let ribuan = reverse.match(/\d{1,3}/g);
        let formatted = ribuan.join(',').split('').reverse().join('');
        return formatted;
    }
    function onKeyPress(event) {
        const isValidInput = /\d/.test(event.key);
        if (!isValidInput) {
            event.preventDefault();
        }
    }
    function uangMasukClick(){
        if(inputUang.length == 0 ){
            alert("inputan uang kosong")
        }
        else if(inputKeterangan.length == 0){
            alert("inputan keterangan kosong")
        }
        else{
            setDisplay("off")
            const newTransaction = {
                uang:parseInt(inputUangFullNumber),
                keterangan:inputKeterangan,
                jam:dateNow(),
                aliran:"masuk"
            }
            addTransaction(prevElement=>[...prevElement,newTransaction])
            setInputKeterangan("")
            setInputUang("")
            setInputUangFullNumber("")

        }
    }
    function uangkeluarClick(){
        if(inputUang.length == 0 ){
            alert("inputan uang kosong")
        }
        else if(inputKeterangan.length == 0){
            alert("inputan keterangan kosong")
        }
        else{
            setDisplay("off")
            const newTransaction = {
                uang:-parseInt(inputUangFullNumber),
                keterangan:inputKeterangan,
                jam:dateNow(),
                aliran:"keluar"
            }
            addTransaction(prevElement=>[...prevElement,newTransaction])
            setInputKeterangan("")
            setInputUang("")
            setInputUangFullNumber("")
                    console.table({inputKeterangan,inputUang,inputUangFullNumber})
        }
    }
    function onchangeInputKeterangan(e){
        setInputKeterangan(e.target.value)
    }

  return (
    <div className={classModal}>
        <div className="container__close-btn" onClick={onclickClose}>X</div>
    <div className="container__modal-container">
            <label htmlFor='uang' ref={checked}>Masukkan Jumlah Uang</label>
                <input 
                    type="text" 
                    onChange={onchangeInput} 
                    value={inputUang} 
                    onKeyPress={onKeyPress}
                    id="uang"
                    
                    inputMode="numeric"
                />
        <div className="container__keterangan-input">
                <h5>Masukkan Keterangan</h5>
                <input 
                    type="text"
                    onChange={onchangeInputKeterangan}
                    value={inputKeterangan}
                     />
        </div>
        <div className="container__modal-btn">
            <button 
            className="container__masuk-btn"
            onClick={uangMasukClick}
            >Masuk</button>
            <button 
            className="container__keluar-btn"
            onClick={uangkeluarClick}
            >Keluar</button>
        </div>
    </div>

    </div>
  )
}
