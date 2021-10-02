import PropTypes from 'prop-types'

const foodLike = [
  {
    id: 1,
    name: "chiken", 
    image: "image/chiken.jpg"    
  }, 
  {
    id:2,
    name: "ham", 
    image: "image/ham.jpg"
  } 
]

function App() {
  return (
    <div>
       {
         foodLike.map(dish => (<Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          alt={dish.alt}
          rating={dish.rating}          
          />))
       }
    </div>
  )
}

Food.PropTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number
}

function Food({name, picture}){  
  return(
    <div>
   <h1>I like {name}</h1>
   <img src={picture} alt={name} />
  </div>
  )  
}
export default App;
