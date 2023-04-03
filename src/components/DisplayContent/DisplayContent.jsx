import React, { useState } from 'react'
import styles from './style.module.css'
import Comments from '../Comments/Comments'

export default (props) => {

  const [comment, setComment] = useState('')
  const [user, setUser] = useState('Lucas')
  const [commentContent, setCommentContent] = useState({ author: user, comment: comment, date: new Date() })

  let { data } = props
  data = data[0]

  const addComment = e => {
    const day = String(new Date().getDate()).padStart(2, '0')
    const month = String(new Date().getMonth() + 1).padStart(2, '0')
    const year = new Date().getFullYear()
    
    e.preventDefault();
    
    data.comments.push([{ answer: comment, author: user, date: `${day}/${month}/${year}`, like: 0 }])
    data.comments = data.comments.flat()
    setComment('')
  }

  return (
    <div className={styles.container}>
      <p> Por: {data.topic.author} em {data.topic.date} </p>
      <h1> {data.topic.title} </h1>
      <h3> {data.topic.subtitle} </h3>
      <p> {data.topic.description} </p>

      <div className={styles.stats}>
        <div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
          <p> {data.topic.like} </p>
        </div>
        <div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <p> {data.comments.length} </p>
        </div>
      </div>

      {data.comments.map((item, key) => {
        return (
          <Comments key={key} data={item} />
        )
      })}

      <form onSubmit={addComment} className={styles.form}>
        <p> Comentar como {user} </p>
        <textarea value={comment} onChange={e => setComment(e.target.value)} required placeholder='Adicionar comentário'></textarea>
        <button type='submit'> Adicionar </button>
      </form>
    </div>
  )
}