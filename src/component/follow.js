import { Component } from "react"
import axios from "axios"

class Followers extends Component {
  state = {
    followers: [],
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/NelsonMaldonado/followers")
      .then((res) => {
        console.log(res)
        this.setState(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  render() {
    return (
      <div>
        Followers
        <p>{this.state.followers}</p>
      </div>
    )
  }
}

export default Followers
