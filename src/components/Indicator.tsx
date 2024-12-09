export default function Indicator({ steps, currentStep }) {
    const printDots = steps.map((_, index) => {
        return (
            <span key={index} className={`text-5xl leading-none align-middle dot ${(index === currentStep) ? 'active' : ''}`}>
                ·
            </span>
        );
    });
    return (
        <div className="flex items-center justify-center">
            {printDots}I
        </div>
    );
}