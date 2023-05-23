import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom";
import styles from "./game.module.css"
import {Game as GameType} from "./types";

interface Props {

}

const Game = (props: Props) => {
  const [game, setGame] = useState<GameType>()
  const params = useParams()

  useEffect(() => {
    fetch("https://hammerhead-app-ak2dp.ondigitalocean.app/game/cfc3e750-cb72-4ce6-8c1e-06e299208237").then(res => res.json()).then(res => {
      console.log(res)
      setGame(res)
    }).catch(e => {
      console.log(e)
    })
  }, [])


  return (
    <div>
      <h1>Game {params.id}</h1>

      {[...Array(15)].map((_, y) => (
        <div className={styles.row} key={y}>
          {[...Array(15)].map((_, x) => (
            <div className={styles.field} key={x}>
              {game ? game?.fields[`${x};${y}`]?.type : ""}
            </div>
          ))}
        </div>
      ))}

      <Link to="/">Home</Link>
    </div>
  )
}

export default Game