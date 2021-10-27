import React, { useState, useEffect } from "react"
import axios from "axios"

const User = () => {
  const [user, setUser] = useState({
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
        setUser({
          ...user,
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

  return <div>User</div>
}

export default User
