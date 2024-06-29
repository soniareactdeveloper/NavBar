import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Register from './Pages/Register'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    )
   )

  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
