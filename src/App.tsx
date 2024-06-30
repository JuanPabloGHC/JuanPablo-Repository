
import { useState } from 'react'
import './App.css'
import Contact from './components/Contact';

function App() {

  const [data, setData] = useState<string>('a');

  return (
    <>
      <div className='main-container'>

        <Contact />

        <div className='flex flex-col w-full'>

        </div>

      </div>
    </>
  )
}

export default App
