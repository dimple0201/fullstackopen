import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newNote, setNewNote] = useState(' ')
  const [showAll, setShowAll] = useState(true)
 
const addNote = (event) => {
   event.preventDefault()
   const noteObject = {
    content: newNote,
  
  }
  setNotes(notes.concat(noteObject))
  setNewNote('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addNote}>
        name: <input 
        value={newNote} 
        onChange={handleNoteChange}
        />
              <div>
          <button type="submit">add</button>
        </div>
        </form>
        <h2>Numbers</h2>
        <ul>
      {notesToShow.map(note =>
          <Note key={note.content} note={note} />
        )}
      </ul>
    </div>
    
  )
}

export default App 