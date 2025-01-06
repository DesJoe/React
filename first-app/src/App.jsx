import { useState } from "react"
import "./css/App.css"

function App() {

  const [products, setProducts] = useState([
    {
      title:"Headset",
      image:"https://tse2.mm.bing.net/th?id=OIP.1BDUxA4ga1lRIXSFYaU-FgEODn&pid=Api&P=0&h=180",
      price:2000
    },
    {
      title:"Headset 2",
      image:"https://tse4.mm.bing.net/th?id=OIP.d6wII6Yy_tpUv7a6ixf4_QHaGy&pid=Api&P=0&h=180",
      price:2000
    },
    {
      title:"Headset 3",
      image:"https://tse2.mm.bing.net/th?id=OIP.db-ME4P3jBEbfZQwMdCd2AHaGc&pid=Api&P=0&h=180",
      price:3000
    }
  ])


  return (
    <>
      <h1>Products</h1>
      <div className="productContainer">
        {products.map((product,index)=>{
          return (
            <div className="productItem">
            <img className="productImage" src={product.image}  />
            <p>{product.title}</p>
            <p>PRICE :{product.price}</p>
  
          </div>
          )
        })}
       
      </div>

    </>
  )
}

export default App
