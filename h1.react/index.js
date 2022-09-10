//const h1 = document.createElement("h1")
//h1.textContent = "Hello world"
//h1.className = "header"
//console.log(h1)

//const element = <h1 className="heder">This is JSX</h1>
//console.log(element)
//reactDOM.render(element, document.getElementById("root"))
const navbar =(
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Conract</li>
    </ul>
  </nav>)
ReactDOM.render(
   navbar,
   document.getElementById("root")
)