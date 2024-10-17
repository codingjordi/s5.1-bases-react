import Indicator from './Indicator.tsx'

export default function Card({
  title,
  description,
  image,
  bgColor,
  handleSetPrevStep,
  handleSetNextStep,
  displayPrev,
  displayNext,
  steps,
  currentStep
}: {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  handleSetPrevStep: typeof Function;
  handleSetNextStep: typeof Function;
  displayPrev: string;
  displayNext: string;
  steps: typeof Array;
  currentStep: number;
}) {
  return (
    <div
      style={{ 
        minHeight: '600px',
        width: '350px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '30px',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          padding: '7rem 0rem',
          borderRadius: '30px 30px 0 0'
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '1.5rem 1.2rem' }}>
        <div style={{ minHeight: '150px' }}>
          <h3 className='text-2xl mb-3'>{title}</h3>
          <p style={{color: '#292928'}}>{description}</p>
        </div>
        <div className='flex justify-between place-items-center mt-2'>
          <div className='indicator'>
            <Indicator steps={steps} currentStep={currentStep} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <button
              style={{
                borderRadius: '50%',
                height: '50px',
                width: '50px',
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid black',
                display: displayPrev,
                padding: '10px'
              }}
              onClick={handleSetPrevStep}
            >
              <img
                src="../public/left-arrow.svg"
                alt="Paso anterior"
                style={{ width: '100%', height: '100%' }}
              />
            </button>
            <button
              style={{
                borderRadius: '50%',
                height: '50px',
                width: '50px',
                marginLeft: '10px',
                display: displayNext,
                padding: '10px'
              }}
              onClick={handleSetNextStep}
            >
              <img
                src="../public/right-arrow.svg"
                alt="Siguiente paso"
                style={{ width: '100%', height: '100%' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
