import { useState } from 'react';
import './App.css'
import Card from './components/Card.tsx'

const tutorialData = [
  {
    title: 'Dedica moltes hores',
    description: 'Un mínim de 30 hores a la setmana, Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    bgColor: '#4da2a9',
    image: '../public/time_managment.svg' 
    
  },
  {
    title: 'Programa projectes propis',
    description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
    bgColor: '#d3d4d9',
    image: ''
  },
  {
    title: 'Procura descansar',
    description: 'Descansar bé i desconnectar són vitals. D\'aquesta manera reduiràs l\'estres i l\'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
    bgColor: '#ffd167',
    image: ''
  }
]



function App() {

  const [step, setStep] = useState(0);



  return (
    <div>
      <Card
        title={tutorialData[step].title}
        description={tutorialData[step].description}
        image={tutorialData[step].image} />
    </div>
  )
}

export default App
