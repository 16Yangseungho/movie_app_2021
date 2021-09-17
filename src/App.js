function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
    </div>
  )
}

function Food(foo){
  console.log(foo);
  return <h1>I like potaoa</h1>
}
export default App;
