import React, { Component } from 'react'

function NotesEditor({ text, handleChange }) {
    return (
        <textarea value={text} onChange={(e) => {
            handleChange(e.target.value)
        }} />
    )
}

export default class NotesDetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isEditing: false,
          draftText: props.note.text,
      };
  }
  render() {
      //declares the class name and note variables
      //and assigns them to the property this.props
      //where the name matches.
      const { note } = this.props;
      const { isEditing, draftText } = this.state;
      return (
        <div>
            {
                isEditing ? <NotesEditor
                            handleChange={this._changeDraftText} 
                            text={draftText} 
                            /> 
                          : draftText
            }
            <br />
            <button onClick={this._toggleIsEditing}>Toggle</button>
        </div>
      );

  }
  _changeDraftText = (newText) => {
    this.setState({
        draftText: newText,
    });
  }
  _toggleIsEditing = () => {
      this.setState({
          isEditing: !this.state.isEditing
      })
  }
}
