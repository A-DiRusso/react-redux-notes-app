import React from 'react'
import styles from './NotesList.module.css';

export default function NotesList(props) {
  return (
    <ul className={styles.list}>
      <li>This</li>
      <li>is</li>
      <li>the</li>
      <li>Notes</li>
      <li>List!</li>    
    </ul>
  );
}
