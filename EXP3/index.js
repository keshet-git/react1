//ReactDOM.render(<h1>I Love Rock 'n' Roll</h1>, document.getElementById("root"))

const h1 = document.createElement("h1")
h1.textContent = "I Love Rock 'n' Roll"
h1.classNane ="header"
document.getElementById("root").append(h1)