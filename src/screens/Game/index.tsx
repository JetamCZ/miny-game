import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom";
import styles from "./game.module.css"
import {Game as GameType} from "./types";
import Field from "./Field";
import axios from "axios";

interface Props {

}

const Game = (props: Props) => {
  const [game, setGame] = useState<GameType>()
  const params = useParams()

  useEffect(() => {
    axios.get(`https://hammerhead-app-ak2dp.ondigitalocean.app/game/${params.id}`, ).then(res => {
      console.log(res)
      setGame(res.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  const flag = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault()

    axios.put<GameType>(`https://hammerhead-app-ak2dp.ondigitalocean.app/game/${params.id}/flag`, {x, y}).then(res => {
      console.log(res)
      setGame(res.data)
    }).catch(e => {
      console.log(e)
    })
  }

  const play = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault()

    axios.put<GameType>(`https://hammerhead-app-ak2dp.ondigitalocean.app/game/${params.id}/play`, {x, y}).then(res => {
      console.log(res.data)
      setGame(res.data)
    }).catch(e => {
      console.log(e)
    })
  }


  return (
    <div>
      <h1>Game {params.id}</h1>

      {[...Array(15)].map((_, y) => (
        <div className={styles.row} key={y}>
          {[...Array(15)].map((_, x) => (
            <Field field={game?.fields[`${x};${y}`]} isFlaggd={game?.flags?.includes(`${x};${y}`)}
                   play={(e) => play(e, x, y)}
                   flag={(e) => flag(e, x, y)}/>
          ))}
        </div>
      ))}

      <Link to="/">Home</Link>
    </div>
  )
}

export default Game