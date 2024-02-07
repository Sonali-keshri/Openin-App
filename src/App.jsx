import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App


// 415181027547-92mrrhn4ud5kkng889m0h8lh9n0h9uq9.apps.googleusercontent.com