import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero></Hero>
    </>
  )
}

export default App