import React, { useState, useEffect } from "react"
import axios from "axios"
import User from "./User"

const Follower = () => {
  const [follower, setFollower] = useState({
    avatar_url: "load image",
    login: "load name",
    id: "load id",
  })
  console.log(follower)
  useEffect(() => {
    axios
      .get("https://api.github.com/users/NelsonMaldonado/followers")
      .then((res) => {
        setFollower({
          ...User,
          avatar_url: res.data.avatar_url,
          login: res.data.login,
          id: res.data.id,
        })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div>Image</div>
      {follower && follower.map((item) => <div>{item.login}</div>)}
      Follower
    </div>
  )
}

export default Follower
