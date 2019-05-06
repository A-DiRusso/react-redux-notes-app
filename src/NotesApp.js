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
                        handleSave={this._updateNote}
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
  _updateNote = (idToUpdate, newText) => {
    // we can't mutate state we need to create a new array with all the existing
    //notes, but we wat to use the newText for the note with id === idToUpdate
    
    //1st using map
    const updatedNotes1 = this.state.notes.map(note => {
        if(note.id === idToUpdate) {
            return {
                ...note,            //spread out all the existing key/value pairs
                text: newText,      // overwrite just the text property for that id
            };
        } else {
            return {
                ...note
            };
        }
    });
    this.setState({
        notes: updatedNotes1,
    });
    //2nd using Filter and find
    // const updatedNotes2 = this.state.notes.filter(note => {
    //     return note.id !== idToUpdate;
    // });
    // const theNoteToUpdate = this.state.notes.find(note => note.id === idToUpdate);
    // this.setState({
    //     notes: [
    //         ...updatedNotes2,
    //         {
    //             ...theNoteToUpdate,
    //             text: newText,
    //         }
    //     ]
    // });
    //2-b using concat()
    // this.setState({
    //     notes: updatedNotes2.concat({
    //         ...theNoteToUpdate,
    //         text: newText,
    //     }),
    // });
  }
}
        
