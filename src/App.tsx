import React, { useState } from 'react'
import './App.css'
import { Note } from './types'
import { NoteBox } from './NoteBox'
import { Button, Stack, Typography } from '@mui/material'
import { NoteEditModal } from './NoteEditModal'

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      title: 'Example note',
      content: 'Hello👋! This is a good first note',
      colorHex: '#e91e63',
    },
    {
      title: 'Note tip',
      content:
        'You can give your note a title, some content, and pick your favorite background color for it',
      colorHex: '#cddc39',
    },
  ])
  const [adding, setAdding] = useState<boolean>(false)
  return (
    <div className="main-app">
      <Stack spacing={5}>
        <Typography variant="h2">Welcome to Anran note app!</Typography>
        <NoteEditModal
          onClose={() => setAdding(false)}
          onSubmit={(note) => {
            setNotes((notes) => [...notes, note])
            setAdding(false)
          }}
          open={adding}
        />
        {notes.length < 1 ? (
          <Typography>Hello👋! Looks like you have no notes yet</Typography>
        ) : (
          <Stack spacing={3}>
            {notes.map((note, index) => (
              <div key={index}>
                <NoteBox
                  note={note}
                  onDelete={() =>
                    setNotes((notes) => notes.filter((_, i) => i !== index))
                  }
                  onUpdate={(note) =>
                    setNotes((notes) =>
                      notes.map((oldNote, i) => (i === index ? note : oldNote))
                    )
                  }
                />
              </div>
            ))}
          </Stack>
        )}
        <Button
          onClick={() => setAdding(true)}
          variant="contained"
          size="large"
        >
          Add new note
        </Button>
      </Stack>
    </div>
  )
}

export default App
