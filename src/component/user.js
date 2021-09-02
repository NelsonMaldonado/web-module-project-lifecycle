import axios from "axios"
import React, { Component } from "react"
import Followers from "./follow"

class User extends Component {
  state = {
    user: null,
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/NelsonMaldonado")
      .then((res) => {
        console.log(res)
        //res.data
        this.setState({
          user: res.data,
        })
      })

      .catch((err) => console.error(err))
  }

  render() {
    const { user } = this.state
    if (!user) return <p>Loading data ...</p>
    return (
      <div>
        <h3>{user.name}</h3>
        <img
          style={{ width: "150px", borderRadius: "50%" }}
          src={user.avatar_url}
          alt={user.name}
        />
        <div>
          <p>Location: {user.location}</p>
          <p>Login: {user.login}</p>
          <p>Repos: {user.public_repos}</p>
          <Followers />
        </div>
      </div>
    )
  }
}

export default User
