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
      <div>
        <div>
          {this.state.followers.map((item) => (
            <div style={{ display: "flex", flexFlow: "wrap" }}>
              <img style={{ width: 60 }} src={item.avatar_url} />
              <p>{item.login}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default Follower

// const Follower = () => {
//   const [follower, setFollower] = useState({
//     avatar_url: "load image",
//     login: "load name",
//     id: "load id",
//   })
//   console.log(follower)
//   useEffect(() => {
//     axios
//       .get("https://api.github.com/users/NelsonMaldonado/followers")
//       .then((res) => {
//         setFollower({
//           ...User,
//           avatar_url: res.data.avatar_url,
//           login: res.data.login,
//           id: res.data.id,
//         })
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   return (
//     <div>
//       <div>Image</div>
//     </div>
//   )
// }

// export default Follower

// const Follower = () => {
//   const [follower, setFollower] = useState({
//     avatar_url: "load image",
//     login: "load name",
//     id: "load id",
//   })
//   console.log(follower)
//   useEffect(() => {
//     axios
//       .get("https://api.github.com/users/NelsonMaldonado/followers")
//       .then((res) => {
//         setFollower({
//           ...User,
//           avatar_url: res.data.avatar_url,
//           login: res.data.login,
//           id: res.data.id,
//         })
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   return (
//     <div>
//       <div>Image</div>
//     </div>
//   )
// }

// export default Follower
