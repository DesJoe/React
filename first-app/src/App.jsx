import { useState } from "react"

function App() {

  const [count,setCount]= useState(1)

  const addCount= () =>{
    setCount(count+1)
  }

  const subCount= () =>{
    setCount(count-1)
  }

  return (
    <>
     <h1>{count}</h1>
     <button onClick={addCount}>Add</button>
     <button onClick={subCount}>Sub</button>
    </>
  )
}

export default App
