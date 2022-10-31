import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import api from './api'


function getUser(){
  api.get("https://backendtalentos.herokuapp.com/listuser")
      .then(Response =>{
          const date =Response.data
          redemeResults.textCont=JSON.stringify(date)
      })
      
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });

}
getUser()


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>hello World NEXt.js oi</h1>
      
    </div>   
  )
}
