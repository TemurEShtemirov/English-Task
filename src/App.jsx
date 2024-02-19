import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Proverbs from './pages/Proverbs'
import Riddle from './pages/Riddle'
import NoPage from './pages/NoPage'
import FlagsPage from './pages/Flags'

export default function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path="/flags" element={<FlagsPage />} />
          <Route path="/proverbs" element={<Proverbs />} />
          <Route path="/riddle" element={<Riddle />} />
          <Route path="*" element={<NoPage />} />
       
      </Routes>
    </>)
}
