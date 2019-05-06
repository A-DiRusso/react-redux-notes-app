import React, { Component } from 'react'
import NotesDetail from './NotesDetail';
import NotesList from './NotesList';
import styles from './NotesApp.module.css';

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: []
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.list}>
            <NotesList />
        </div>
        <div className={styles.detail}>
            <NotesDetail />
        </div>
      </div>
    )
  }
}
        
