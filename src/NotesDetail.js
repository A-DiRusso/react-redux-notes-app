import React, { Component } from 'react'

export default class NotesDetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
          
      }
  }
  render() {
      //declares the class name and note variables
      //and assigns them to the property this.props
      //where the name matches.
      const { note } = this.props;
      return (
        <div>
          {note.text}
        </div>
      );

  }
}
