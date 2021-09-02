import "./App.css"
import User from "./component/user"
import Followers from "./component/follow"

function App() {
  return (
    <div className="App">
      <h1>Github User Card</h1>
      <User />
      <Followers />
    </div>
  )
}

export default App
