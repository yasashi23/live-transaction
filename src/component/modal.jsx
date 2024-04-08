import React, { useState } from 'react';

export default function Modal({ display, setDisplay, addTransaction }) {
    const [inputUang, setInputUang] = useState("");
    const [inputKeterangan, setInputKeterangan] = useState("");
    const [inputUangFull,setInputUangFull] = useState("")


    function dateNow() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        return `${formattedHours}:${formattedMinutes}`;
    }
function formatToRupiah(angka) {
    if (!angka) return "";

    let reverse = angka.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    if (!ribuan) return angka;
    let formatted = ribuan.join(',').split('').reverse().join('');
    return formatted;
}

    function onclickClose() {
        setInputKeterangan("");
        setInputUang("");
        setInputUangFull("");
        setDisplay("off");
    }

    function onchangeInput(e) {
        const cleanedValue = e.target.value.replace(/\D/g, '');
        const formattedValue = formatToRupiah(cleanedValue);
        console.log(cleanedValue,formattedValue) 
        setInputUangFull(cleanedValue);
        setInputUang(formattedValue);
    }

    function uangMasukClick() {
        console.log(inputUang)
        if (!inputUang.trim()) {
            alert("Inputan uang kosong");
            return;
        }
        if (!inputKeterangan.trim()) {
            alert("Inputan keterangan kosong");
            return;
        }
        setDisplay("off");
        const newTransaction = {
            uang: parseInt(inputUangFull),
            keterangan: inputKeterangan,
            jam: dateNow(),
            aliran: "masuk"
        };
        addTransaction(prevElement => [...prevElement, newTransaction]);
        setInputKeterangan("");
        setInputUang("");
        setInputUangFull("");
    }

    function uangKeluarClick() {
        if (!inputUang.trim()) {
            alert("Inputan uang kosong");
            return;
        }
        if (!inputKeterangan.trim()) {
            alert("Inputan keterangan kosong");
            return;
        }
        setDisplay("off");
        const newTransaction = {
            uang: -parseInt(inputUangFull),
            keterangan: inputKeterangan,
            jam: dateNow(),
            aliran: "keluar"
        };
        addTransaction(prevElement => [...prevElement, newTransaction]);
        setInputKeterangan("");
        setInputUang("");
        setInputUangFull("");
    }

    function onchangeInputKeterangan(e) {
        setInputKeterangan(e.target.value);
    }

    return (
        <div className={`container__modal ${display}`}>
            <div className="container__close-btn" onClick={onclickClose}>X</div>
            <div className="container__modal-container">
                <label htmlFor='uang'>Masukkan Jumlah Uang</label>
                <input
                    type="text"
                    onChange={onchangeInput}
                    value={inputUang}
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
                        onClick={uangKeluarClick}
                    >Keluar</button>
                </div>
            </div>
        </div>
    );
}
