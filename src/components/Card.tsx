export default function Card({ title , description , image } : {title: string, description: string, image: string}) {



  return (
    <div>
        <div>
            <img src={image} alt={title} />        
        </div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div>
            <button onClick={}>Prev</button>
            <button>Next</button>
        </div>
    </div>
  )
}