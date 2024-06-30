
import { useState } from 'react'
import './App.css'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {

  const [data, setData] = useState<string>('a');

  return (
    <>
      <div className='main-container'>

        <Contact />

        <div className='flex flex-col w-full'>

          <Portfolio setData={setData} />

        </div>

      </div>
    </>
  )
}

export default App
