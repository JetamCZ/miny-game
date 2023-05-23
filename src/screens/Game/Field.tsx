import React from "react"
import {Field as FieldType} from "./types";
import styles from "./game.module.css"
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

interface Props {
  field?: FieldType
  isFlaggd?: boolean,
  flag: (e: React.MouseEvent) => void
  play: (e: React.MouseEvent) => void
}

const Field = ({field, isFlaggd, flag, play}: Props) => {
  if(field?.type === "number" && field.value === 0) {
    return (
      <div className={styles.field} style={{opacity: 0.5}}></div>
    )
  }

    if(field?.type === "number") {
      return (
        <div className={styles.field}>{field.value}</div>
      )
    }

  if(field?.type === "bomb") {
    return (
      <div className={styles.field}>💣</div>
    )
  }

    if(isFlaggd) {
      return <div className={styles.field}>🚩</div>
    }

    return (
      <div className={styles.field} onContextMenu={flag} onClick={play}></div>
    )
}

export default Field