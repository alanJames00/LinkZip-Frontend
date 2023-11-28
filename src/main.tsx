import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import ShortenUrl from './components/ShortenUrl.tsx'
import HomePage from './components/HomePage.tsx'
import CreateLinkTree from './components/createLinkTree.tsx'
import UrlNotFound from './components/UrlNotFound.tsx'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/shorten' element={<ShortenUrl />} />
      <Route path='/createTree' element={<CreateLinkTree />} />
      <Route path='/urlNotFound' element={<UrlNotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
