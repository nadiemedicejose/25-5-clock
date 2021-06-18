import React from 'react'
import '../styles/App.scss';
import Clock from './Clock';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <Clock />
      <Footer />
    </div>
  )
}
