import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import About from './components/Header/aboutus.jsx'
import Contact from './components/Header/contact.jsx'
import Aura from './components/Leftworks/aura.jsx'
import Suggestion from './components/Leftworks/suggestion.jsx'
import Fir from './components/Leftworks/fir.jsx'
import ComGov from './components/Leftworks/comGov.jsx'
import Complaint from './components/Leftworks/complaint.jsx'
import Deeds from './components/Leftworks/goodDeeds.jsx'
import Mental from './components/Leftworks/mental.jsx'
import Women from './components/Leftworks/Women.jsx'
import Feed from './components/feed.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     
      
      <Route path='/' element={<Layout />}>
      <Route index element={<Feed />} />
       <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
        <Route path='AURAAA' element={<Aura />} />
        <Route path='suggestion' element={<Suggestion />} />
        <Route path='fir' element={<Fir />} />
        <Route path='PKMKC' element={<ComGov />} />
        <Route path='Complaint' element={<Complaint />} />
        <Route path='MeraBhai' element={<Deeds />} />
        <Route path='DexterHaTu' element={<Mental />} />
        <Route path='Narii' element={<Women />} />
      </Route>
     
     
      </>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
