import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './views/Register/Register.view'
import { Login } from './views/Login/Login.view'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/register' element={Register()}/>
        <Route path='/login' element={Login()}/>
      </Routes>
      
    </div>
  )
}

export default App
