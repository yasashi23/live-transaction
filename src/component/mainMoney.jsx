import React from 'react';

export default function MainMoney({ transaction }) {
    function summed() {
        // console.table(transaction)
        const result = transaction.reduce((total, { uang }) => total + Number(uang), 0);
        return result;
    }

    return (
        <div className='container__main-money'>
            <div className="container__content-money">
                <h1>Rp. {summed().toLocaleString()}</h1>
                <p>Uang Di Dompet</p>
            </div>
        </div>
    );
}
