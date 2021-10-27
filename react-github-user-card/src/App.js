import "./App.css"
import User from "./components/User"
import FollowerList from "./components/FollowerList"

function App() {
  return (
    <div className="App">
      <h1>GitHub Card</h1>
      <div className="topBar">
        <div className="gitHub">Github Handle</div>
        <form>
          <label className="search">
            Search
            <input />
          </label>
        </form>
      </div>
      <User />
      <FollowerList />
    </div>
  )
}

export default App
