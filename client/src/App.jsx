import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/*Start from here 15:31  */}
       <h1 class="text-3xl font-bold underline">
         Hello world!
       </h1>
    </div>
  )
}

export default App
