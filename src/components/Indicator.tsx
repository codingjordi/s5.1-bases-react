export default function Indicator({ steps, currentStep }) {

    const printDots = steps.map((_, index) => {
        return (

        <span key={index} style={{fontSize: '3rem'}} className={`dot ${(index === currentStep) ? 'active' : ''}`}>
            · 
        </span>
        );
    });

    return (
        <>
            {printDots}       
        </>
    );
}
