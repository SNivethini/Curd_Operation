import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Create from './Components/Create'
import Update from './Components/Update'
import Read from './Components/Read'
import Mains from './Components/Mains'
import { useNavigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const navcreate= useNavigate()
  const navread= useNavigate()
  const navupdate= useNavigate()
   
  return (
    <>
    <h2 className='flex justify-center  text-2xl font-extrabold'>CURD OPERATION</h2>
    <div className='flex flex-col gap-2 text-xl'>
    <button onClick={()=>navcreate('/create')}>Create</button>
    <button onClick={()=>navread('/read')}>Read</button>
    <button onClick={()=>navupdate('/update')}> Update</button>
   </div>


   
    
    
    <Routes>
      
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/read' element={<Read/>}/>
      <Route path='/update' element={<Update/>}/>

    </Routes>
   
    


    </>
  )
}

export default App
