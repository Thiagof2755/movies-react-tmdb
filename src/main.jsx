import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Search from './pages/Search.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Serie from './pages/Serie.jsx'
import Movies from './pages/Movies.jsx'



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="Movies" element={<Movies />} />
          <Route path=":type/:id" element={<Movie />} />
          <Route path="serie" element={<Serie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
