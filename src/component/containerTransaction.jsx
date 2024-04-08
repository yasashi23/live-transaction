import React from 'react'
import Transaction from './transaction'

export default function ContainerTransaction({listTransaction}) {
    const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
];
const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

    function pTanggal(){
        const date = new Date()
        const hari = date.getDay()
        const tanggal = date.getDate()
        const bulan = date.getMonth()
        const tahun = date.getFullYear()
        return `${namaHari[hari]}, ${tanggal} ${namaBulan[bulan]} ${tahun}`    }
    return (
        <div className='container__transaction'>
            <h3>Live Transaksi</h3>
            <p>{pTanggal()}</p>
            <div className="container__transaction-content">
                {listTransaction.map((el, ind) => (
                    <Transaction 
                        key={ind}
                        uang={el.uang}
                        keterangan={el.keterangan}
                        jam={el.jam}
                        aliran={el.aliran}
                    />
                ))}
            </div>
        </div>
    )
}
