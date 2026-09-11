import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { toast } from 'react-toastify'
import LoadingSpinner from './components/LoadingSpinner'


function App() {
  const [technologies, setTechnologies] = useState([])
  const [loadging, setLoading] = useState([])

  // JSON Data Load
   useEffect(()=>{
    fetch('/public/data.json')
    .then((res) => res.json)
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    })
    .catch((err) => {
      toast.error('Failed to load technologies data.')
      setLoading(false);
    })
   })

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar/>
        <Hero/>

        {/* techCard Area  */}
        <main>
          <div className='mb-6 sm:mb-8 text-center md:text-left'>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-gray-900'>Explore the
              <span className='brand-gradient-text'>Technologies</span>
            </h2>
            <p className=''>Pick your favorite technologies to build your ideal developer stack.</p>
          </div>

          {loadging ? (
            <LoadingSpinner/>
          ) :(
            <div>
              {/* Tech Card  */}
              <div>

              </div>
              {/* Your Stack  */}
              <div>

              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
