import React, { Component } from 'react'

function NotesEditor({ text }) {
    return (
        <textarea value={text} />
    )
}

export default class NotesDetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isEditing: false,
      };
  }
  render() {
      //declares the class name and note variables
      //and assigns them to the property this.props
      //where the name matches.
      const { note } = this.props;
      const { isEditing } = this.state;
      return (
        <div>
            {
                isEditing ? <NotesEditor text={note.text} /> : note.text
            }
          
        </div>
      );

  }
}
