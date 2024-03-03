import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Proverbs from './pages/Proverbs'
import Riddle from './pages/Riddle'
import NoPage from './pages/NoPage'
import FlagsPage from './pages/Flags'
import OtherGames from './pages/OtherGames'
import OtherGamePlags from './pages/OtherGame.flags'

export default function App() {
  return (

    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/flags" element={<FlagsPage />} />
        <Route path="/proverbs" element={<Proverbs />} />
        <Route path="/riddle" element={<Riddle />} />
        <Route path="/other_games" element={<OtherGames />} />
        <Route path="/play/flags" element={<OtherGamePlags />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>)

  // / play / flags
}
