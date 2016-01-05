import React, { Component } from 'react';
import uuid from 'node-uuid';

import Note from './Note.jsx';
import Notes from './Notes'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do other things'
        }
      ]
    };
  }

  render() {

   const notes = this.state.notes;

   return (
     <div>

       <button className="add-note" onClick={this.addNote}>+</button>
       <Notes notes={notes} />
     </div>
   );
 }

 addNote = () => {
   this.setState({
     notes: this.state.notes.concat([{
       id: uuid.v4(),
       task: 'New Task'
     }])
   });
 }
}
