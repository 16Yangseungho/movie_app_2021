import Potato from "./Potato"

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
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Potato foo="you" />
    </div>
  )
}

function Food(foo){
  const { fav } = foo
  return <h1>I like {fav}</h1>
}
export default App;
