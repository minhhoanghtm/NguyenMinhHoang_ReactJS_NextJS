import { useState } from 'react'
import './App.css'
import ProductCard from './component/ProductCard'
import './css/index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ProductCard />
      </div>
    </>
  )
}

export default App
