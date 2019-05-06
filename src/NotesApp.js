import React, { Component } from 'react'
import NotesDetail from './NotesDetail';
import NotesList from './NotesList';
import styles from './NotesApp.module.css';

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedNote: '1001',
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
    const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);
    return (
      <div className={styles.app}>
        <div className={styles.list}>
            <NotesList notes={this.state.notes}
                       handleSelection={this._selectNote}
                        />
        </div>
        <div className={styles.detail}>
            <NotesDetail 
                        note={theNote}
                        />
        </div>
      </div>
    )
  }
  _selectNote = (id) => {
    this.setState({
        selectedNote: id
    })
  }
}
        
