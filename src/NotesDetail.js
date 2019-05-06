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
          id: props.note.id,
      };
  }
  static getDerivedStateFromProps(props, state) {
    //there is no 'this' in this static function so we receive them as arguments

    //must return an object that describes any modifications to state.
    if (props.note.id !== state.id) {
        return {
            id: props.note.id,
            draftText: props.note.text,
        };

    } else {
        return null;
    }
  }
  render() {
      //declares the class name and note variables
      //and assigns them to the property this.props
      //where the name matches.
    //   const { note } = this.props;
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
            <button onClick={this._saveDraft}>Save</button>
        </div>
      );

  }
  _saveDraft = () => {
      this.props.handleSave(this.state.id, this.state.draftText);
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
