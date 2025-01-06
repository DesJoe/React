import { useState } from "react"
import "./css/App.css"

function App() {

  const [count, setCount] = useState(1)

  const addCount = () => {
    setCount(count + 1)
  }

  const subCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Products</h1>
      <div className="productContainer">
        <div className="productItem">
          <img className="productImage" src="https://tse4.mm.bing.net/th?id=OIP.d6wII6Yy_tpUv7a6ixf4_QHaGy&pid=Api&P=0&h=180" alt="" />
          <p>Headset 1</p>
          <p>PRICE :3000</p>

        </div>
        <div className="productItem">
          <img className="productImage" src="https://tse2.mm.bing.net/th?id=OIP.1BDUxA4ga1lRIXSFYaU-FgEODn&pid=Api&P=0&h=180" alt="" />
          <p >Headset 2</p>
          <p >PRICE :3200</p>

        </div>
        <div className="productItem">
          <img className="productImage" src="https://tse2.mm.bing.net/th?id=OIP.db-ME4P3jBEbfZQwMdCd2AHaGc&pid=Api&P=0&h=180" alt="" />
          <p>Headset 3</p>
          <p>PRICE :3500</p>

        </div>

      </div>

    </>
  )
}

export default App
