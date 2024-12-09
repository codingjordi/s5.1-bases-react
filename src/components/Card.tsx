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
      className={`min-h-[600px] w-[350px] text-black bg-white rounded-3xl overflow-hidden`}
    >
      <div 
        className={`${bgColor} py-28 rounded-t-3xl`}
        style={{ backgroundColor: bgColor }} // Añadido estilo en línea para color dinámico
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="p-6">
        <div className="min-h-[150px]">
          <h3 className='text-2xl mb-3'>{title}</h3>
          <p className='text-[#292928]'>{description}</p>
        </div>
        <div className='flex justify-between items-center mt-2'>
          <div className='indicator'>
            <Indicator steps={steps} currentStep={currentStep} />
          </div>
          <div className="flex text-right">
            <button
              className={`rounded-full h-[50px] w-[50px] bg-white text-black border-2 border-black 
                          flex items-center justify-center p-2.5 
                          ${displayPrev === 'none' ? 'hidden' : ''}`}
              onClick={handleSetPrevStep}
            >
              <img
                src="../public/left-arrow.svg"
                alt="Paso anterior"
                className="w-full h-full"
              />
            </button>
            <button
              className={`rounded-full h-[50px] w-[50px] ml-2.5 
                          flex items-center justify-center p-2.5
                          ${displayNext === 'none' ? 'hidden' : ''}`}
              onClick={handleSetNextStep}
            >
              <img
                src="../public/right-arrow.svg"
                alt="Siguiente paso"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}