import React from "react"
import {Link, useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      fetch("https://hammerhead-app-ak2dp.ondigitalocean.app/game", {method: "POST"}).then(res => res.json()).then(res => {
        console.log(res)
        navigate(`/game/${res.id}`)
      }).catch(e => {
        console.log(e)
      })
    }

    return (
        <div>
          <h1>Welcome page</h1>

          <button onClick={handleClick}>New game</button>
        </div>
    )
}

export default Welcome