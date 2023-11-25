import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ShortenUrl from './components/ShortenUrl.tsx'
import HomePage from './components/HomePage.tsx'
import CreateLinkTree from './components/createLinkTree.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage />} />
      <Route path='/shorten' element={<ShortenUrl />} />
      <Route path='/createTree' element={<CreateLinkTree />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
