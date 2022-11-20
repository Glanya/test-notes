import React from 'react';
import { NewNote } from '../NewNote';
import { NoteList } from '../NoteList';

function App() {
  return (
    <div className="wrapper">
      <NewNote />
      <NoteList />
    </div>
  );
}

export default App;
