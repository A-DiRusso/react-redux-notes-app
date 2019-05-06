import React, { Component } from 'react'
import NotesDetail from './NotesDetail';
import NotesList from './NotesList';
import styles from './NotesApp.module.css';

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [
            {
                id: '1001',
                title: 'first note',
                text: 'this is your first note!', 
            },
            {
                id: '1002',
                title: 'second note',
                text: 'this is your second note!', 
            },
            {
                id: '1003',
                title: 'third note',
                text: 'this is your third note!', 
            },
        ],
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.list}>
            <NotesList notes={this.state.notes} />
        </div>
        <div className={styles.detail}>
            <NotesDetail />
        </div>
      </div>
    )
  }
}
        
