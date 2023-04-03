import React, { useState } from 'react'
import styles from './style.module.css'

export default (props) => {

  const { data } = props
  
  return (
    <div className={props.selected ? styles.selected : styles.container} onClick={() => props.selectedContent(data.id)}>
      <p> { data.title } </p>
      <span> Por { data.author } <span> ● </span>  { data.date } <span> ● </span>  { data.like } likes <span> ● </span>  { data.comments } comentários </span>
    </div>
  )
}
