import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useRef } from 'react'
import { useEffect } from 'react'

function App() {
  //useEffect ----> hook to do side effect in react
  let [ws, setWs] = useState(null)  // to craete state variable
  let inputRef = useRef()  // store any dom element reference, and it is different from useState, because it does not trigger re-rendering of a component
  useEffect(()=>{
    const socket = new WebSocket("ws://localhost:8888")
    socket.onmessage = (e)=>{
      console.log(e.data)
    }
    setWs(socket)
  }, {})


  function sendMessage(){
    let message = inputRef.current.value
    ws.send(message)
    inputRef.current.value=""
  }

  let wss = new WebSocket("wss://localhost:8888")
  return (
    <>
      <h1>Ping-Pong</h1>
      <input type="text"/>
      <button onClick={sendMessage()}>Send</button>
    </>
  )
}

export default App
