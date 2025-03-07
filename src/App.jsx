import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import GernerPage from './pages/GernerPage'

function App() {
 

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/home' element={<RegisterPage/>}/>
      <Route path='/geners' element={<GernerPage/>}/>
      <Route path='/carousel' element={<RegisterPage/>}/>
      <Route path='/dashbord' element={<RegisterPage/>}/>
      <Route path='/movie' element={<RegisterPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
