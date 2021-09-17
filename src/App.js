const foodLike = [
  {
    name: "chiken", 
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg"
  }, 
  {
    name: "ham", 
    image: "https://www.the-pr.co.kr/news/photo/202009/45637_69367_331.jpg"
  } 
]

function App() {
  return (
    <div>
       {
         foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
       }
    </div>
  )
}

function Food({name, picture}){  
  return(
    <div>
   <h1>I like {name}</h1>
   <img src={picture} />
  </div>
  )  
}
export default App;
