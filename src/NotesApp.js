import React, { Component } from 'react'
import NotesDetail from './NotesDetail';
import NotesList from './NotesList';

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: []
    }
  }
  render() {
    return (
      <div>
        <NotesDetail />
        <NotesList />
      </div>
    )
  }
}
