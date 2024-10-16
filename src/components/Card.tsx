export default function Card({
  title,
  description,
  image,
  bgColor,
  handleSetPrevStep,
  handleSetNextStep
}: {
  title: string;
  description: string;
  image: string;
  bgColor: string
  handleSetPrevStep: typeof Function;
  handleSetNextStep: typeof Function;
}) {
  return (
    <div
      style={{
        maxHeight: '600px',
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
          padding: '3rem 0rem',
          borderRadius: '30px 30px 0 0'
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '3rem 1rem' }}>
        <div style={{ minHeight: '150px' }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button
            style={{
              borderRadius: '50%',
              height: '50px',
              width: '50px',
              marginRight: '10px'
            }}
            onClick={handleSetPrevStep}
          >
            {'<'}
          </button>
          <button
            style={{
              borderRadius: '50%',
              height: '50px',
              width: '50px'
            }}
            onClick={handleSetNextStep}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}
