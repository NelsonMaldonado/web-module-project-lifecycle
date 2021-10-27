import React from "react"
import axios from "axios"

class Follower extends React.Component {
  state = {
    // avatar_url: "load image",
    // login: "load name",
    // id: "load id",
    followers: [],
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/NelsonMaldonado/followers")
      .then((res) => {
        const followers = res.data
        this.setState({ followers })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {this.state.followers.map((item) => (
          <div
            style={{
              //   border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
              alignItems: "center",
              marginRight: 10,
              marginLeft: 10,
            }}
          >
            <img style={{ width: 130 }} src={item.avatar_url} />
            <strong>{item.login}</strong>
          </div>
        ))}
      </div>
    )
  }
}
export default Follower
