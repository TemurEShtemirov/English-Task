import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Flags from './pages/Flags'
import Proverbs from './pages/Proverbs'
import Riddle from './pages/Riddle'
import NodePage from './pages/NodePage'

export default function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="flags" element={<Flags />} />
          <Route path="proverbs" element={<Proverbs />} />
          <Route path="riddle" element={<Riddle />} />
          <Route path="*" element={<NodePage />} />
        </Route>
      </Routes>
    </>)
}
