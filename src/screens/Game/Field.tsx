import React from "react"
import {Field as FieldType} from "./types";
import styles from "./game.module.css"

interface Props {
  field?: FieldType
  isFlaggd?: boolean
}

const Field = ({field, isFlaggd}: Props) => {
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
      <div className={styles.field}></div>
    )
}

export default Field