import React, { useState, useEffect } from "react"
import axios from "axios"

const User = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    axios
      .get("https://api.github.com/NelsonMaldonado/")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <div>User</div>
}

export default User
