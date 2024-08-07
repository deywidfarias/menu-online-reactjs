import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interfaces/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className='container'>
      <h1>Menu</h1>
      <div className='card-grid'>
        {data?.map(foodData => 
          <Card 
            title={foodData.title}
            image={foodData.image}
            price={foodData.price}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
