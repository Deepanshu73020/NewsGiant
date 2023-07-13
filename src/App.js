import './App.css';
import NavBar from './components/NavBar';
import React, { Component, useState } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  const [progress, setProgress] = useState(0)
  const pageSize = 5

  return (
    <div>

      <NavBar />

      <LoadingBar
        color='#f11946'
        height={2}
        progress={progress}
      />

      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />

        <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />

        <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />} />

        <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />} />

        <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" />} />

        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />} />

        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />

        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />} />

      </Routes>
    </div>
  )
}
export default App;

