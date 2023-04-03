import React, { useEffect, useState } from 'react'
import './App.css'
import data from '../public/data.json'
import styles from './style.module.css'

import Sidebar from './components/Sidebar/Sidebar'
import TopicInList from './components/TopicInList/TopicInList'
import DisplayContent from './components/DisplayContent/DisplayContent'


export default function App() {

  const [category, setCategory] = useState('Geral')
  const [content, setContent] = useState(null)

  // const getData = data[0]
  // const isImg = getData.topic.description.substring(0, 8) === 'https://'

  const getCategory = (data) => {
    setCategory(data)
  }

  const getContent = (data) => {
    setContent(data)
  }

  useEffect(() => {
    setContent(null)
  }, [category])

  return (
    <>
      <Sidebar changeCategory={getCategory} />
      <section className={styles.displayTopic}>
        <h1> { category } </h1>

        {(category !== 'Geral' ? data.filter(item => item.topic.category === category.toLowerCase()) : data).map((item, key) => {
        return (
          <React.Fragment key={key}>
          <TopicInList 
            selectedContent={getContent} 
            data={{ id: item.id, title: item.topic.title, author: item.topic.author, date: item.topic.date, like: item.topic.like, comments: item.comments.length }}
            selected={content === key + 1}/>
          </React.Fragment>
        )
        })}
      </section>
      {content !== null &&
        <DisplayContent data={data.filter(item => item.id == content)}/>
      }
    </>
  )
}
