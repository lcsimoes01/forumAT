import React, { useState } from "react";
import styles from './style.module.css';
import { Button } from '@mui/material';

export default (props) => {

  const [menu, setMenu] = useState(0)
  const menuItems = ['Geral', 'Jogos', 'Livros', 'Filmes', 'Séries', 'Tecnologia', 'Música', 'Finanças', 'Pintura', 'Anime']

  const passParam = (key) => {
    setMenu(key)
    props.changeCategory(menuItems[key])
  }

  return (
    <aside className={styles.sidebar}>
      <h2> Myddit </h2>

      <ul>
        {menuItems.map((item, key) => {
          return (
            <li 
              key={key} 
              className={key === menu ? styles.active : ''}
              onClick={() => passParam(key)}
            > 
              {item} 
            </li>
          )
        })}
      </ul>
    </aside>
  )
}