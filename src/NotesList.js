/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './NotesList.module.css';

function NotesListItem({ id, text, handleClick }) {
    return (
        <li key={id}><a 
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(id);
                }}
                    
            >
            {text}
            </a></li>
        
    );
}

export default function NotesList({ notes, className, handleSelection }) {
  const items = notes.map(({title, id}) => <NotesListItem id={id} text={title} handleClick={handleSelection}/>);// this is destructuring slang
  return (
    <ul className={styles.list}>
      {items}
    </ul>
  );
}
