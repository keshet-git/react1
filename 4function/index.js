
function Heder() {
  return(
    <heder>
        <nav className="nav">
          <img src="./React-icon.svg (1).png" className="nav-logo"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </heder>
  )
}
function M(){
  return(
    <div>
      <h1>ReasonsI'm excited to learn React</h1>

      <ol>
        <li>It's a populer library, so I'll be
        able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a
        developer if I know React</li>
      </ol>
    </div>
  )
}

function Footer() {
  return(
    <footer className="nav-footer">
      <small>© 2022 KRA development.  All rights reserevd.</small>
    </footer>
  )
}


function Page() {
  return(

    <div>
      <Heder />
      <M />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))