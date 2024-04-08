import React,{ useState,useRef } from 'react'
import './App.css'
import MainMoney from './component/mainMoney'
import ContainerTransaction from './component/containerTransaction'
import BtnTransaction from './component/btnTransaction'
import Modal from './component/modal'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [modal,setModal] = useState("off")
  const [transactionList,setTransactionList] = useState([])
  const targetRef = useRef(null);
  const checked = useRef(null)
  const loadingModal = `container__loading-modal ${modal}`
  return (
    <div className="container">
    {/* <Analytics /> */}
    <div className="container__content">
      <MainMoney transaction={transactionList}/>
      <div className="container__body">
        <ContainerTransaction listTransaction={transactionList}/>
      </div>
        <BtnTransaction 
          setDisplay={setModal} 
          targetRef={targetRef}
          checked={checked}
          />
      <div className={loadingModal}>
      <Modal 
        display={modal} 
        setDisplay={setModal} 
        addTransaction={setTransactionList}
        checked={checked}
        />
      </div>
    </div>
    <span ref={targetRef}></span>
    </div>
  )
}

export default App
