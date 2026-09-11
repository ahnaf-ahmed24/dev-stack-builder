import './App.css'
import Hero from './components/hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default App
