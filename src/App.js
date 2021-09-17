function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" someting = {true} papapa = {['hello', 1,2, true]}/>
    </div>
  )
}

function Food(props){
  console.log(props);
  return <h1>I like potaoa</h1>
}
export default App;
