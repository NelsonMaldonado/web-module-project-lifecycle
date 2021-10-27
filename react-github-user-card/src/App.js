import "./App.css"
import User from "./components/User"
import FollowerList from "./components/FollowerList"

function App() {
  return (
    <div className="App">
      <h1>GitHub Card</h1>
      <User />
      <FollowerList />
    </div>
  )
}

export default App
