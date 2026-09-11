import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { toast } from 'react-toastify'
import LoadingSpinner from './components/LoadingSpinner'
import TechCard from './components/TechCard'
import YourStack from './components/YourStack'


function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loadging, setLoading] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  // JSON Data Load
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error('Failed to load technologies data.')
        setLoading(false);
      })
  }, []);

  //Add in Stack

  const handelAddToStack = (tech) => {
    const isExist = selectedStack.some((item) => item.id === tech.id);

    if (isExist) {
      toast.warning(`${tech.name} is already in your stack`, {
        position: 'bottom-right',
        autoClose: 25000.
      });
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to your stack`, {
      position: 'bottom-right',
      autoClose: 2500,
    })
  };

  // remove Stack item 

  const handleRemoveFromStack = (id) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    const updatedStack = selectedStack.filter((item) => item.id !== id);
    setSelectedStack(updatedStack);

    if (itemToRemove) {
      toast.info(`Remove ${itemToRemove.name} from your stack`, {
        position: 'bottom-right',
        autoClose: 2500,
      });
    }
  };


  // remove all stack 
  const handleRemoveAll = () => {
    if (selectedStack.length === 0)
      return;
    setSelectedStack([]);
    toast.error('Cleared all items from your stack.', {
      position: 'top-right',
      autoClose: 2000,
    });

  };


  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />

        {/* techCard Area  */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8" id="technologies">
          <div className='mb-6 sm:mb-8 text-center md:text-left'>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-gray-900'>Explore the
              <span className='brand-gradient-text'>Technologies</span>
            </h2>
            <p className=''>Pick your favorite technologies to build your ideal developer stack.</p>
          </div>

          {loadging ? (
            <LoadingSpinner />
          ) : (
            <div className='flex flex-col lg:grid lg:grid-cols-4 gap-8'>
              {/* Tech Card  */}
              <div className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
                {technologies.map((tech) => {
                  const isAdded = selectedStack.some((item) =>
                    item.id === tech.id);
                  return (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handelAddToStack}
                      isAdded={isAdded}
                    />
                  )
                })}
              </div>
              {/* Your Stack  */}
              <div>
                <YourStack
                  selectedStack={selectedStack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
