import './App.css'
import RootLayout from './components/rootLayout/RootLayout';
import Home from './pages/Home';
import User from './pages/User';

import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
      </Route>
    ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
