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
        this.setState({
          followers: res.data,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }
  render() {
    const { followers } = this.state

    if (followers.length === 0) return <p>Loading Followers</p>
    return (
      <div className="followers-wrapper">
        {followers.map((follower) => (
          <div key={follower.id} clasName="follower-card">
            <img
              style={{ width: "150px", borderRadius: "50%" }}
              src={follower.avatar_url}
              alt={follower.login}
            />
            <h4>{follower.login}</h4>
          </div>
        ))}
      </div>
    )
  }
}

export default Followers
