
import { useState } from 'react'
import './App.css'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Data from './components/Data';

function App() {

  const [data, setData] = useState<string>('a');

  return (
    <>
      <div className='main-container'>

        <Contact />

        <div className='flex flex-col w-full'>

          <Portfolio setData={setData} />

          <Data data={data} />

        </div>

      </div>
    </>
  )
}

export default App;
