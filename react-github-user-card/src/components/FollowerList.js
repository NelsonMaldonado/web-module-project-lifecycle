import React from "react"
import Follower from "./Follower"

const FollowerList = () => {
  return (
    <div>
      Follower List
      <div style={{ display: "flex" }}>
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
      </div>
    </div>
  )
}

export default FollowerList
