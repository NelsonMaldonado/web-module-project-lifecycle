import React, { useState, useEffect } from "react"
import axios from "axios"

const User = () => {
  const [user, setUser] = useState({
    avatar_url: "loading",
    name: "loading",
    bio: "loading",
    public_repos: "loading",
    followers: "loading",
    id: "loading",
  })
  console.log(user)
  useEffect(() => {
    axios
      .get("https://api.github.com/users/NelsonMaldonado")
      .then((res) => {
        console.log(res.data)
        setUser({
          ...user,
          avatar_url: res.data.avatar_url,
          name: res.data.name,
          bio: res.data.bio,
          public_repos: res.data.public_repos,
          followers: res.data.followers,
          id: res.data.id,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img style={{ width: 200 }} src={user.avatar_url} alt="nelly-photo" />
      </div>
      <div>
        <h2>{user.name}</h2>
        <h3>Total Repos: {user.public_repos}</h3>
        <h3>Total Followers: {user.followers}</h3>
      </div>
    </div>
  )
}

export default User
