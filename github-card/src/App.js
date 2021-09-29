import React from "react"
import axios from "axios"
import "./App.css"

class App extends React.Component {
  state = {
    name: "Audi",
  }

  //Fetching data
  componentDidMount() {
    axios.get("https://api.github.com/users").then((res) => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>GitHub API 2.0 by Nelly</h1>
      </div>
    )
  }
}

export default App
