import React from 'react'
import styles from './style.module.css'

export default (props) => {

  const { data } = props
  
  return (
    <div className={styles.container}>
      <div>
        <span> { data.author } ● { data.date } </span>
        <p> { data.answer } </p>
      </div>

      <div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
        <p> { data.like } </p>
      </div>
    </div>
  )
}