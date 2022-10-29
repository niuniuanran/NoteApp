import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from '@mui/material'
import { FC, useState } from 'react'
import { NoteEditModal } from './NoteEditModal'
import { Note } from './types'

interface Props {
  note: Note
  onDelete: () => void
  onUpdate: (note: Note) => void
}
export const NoteBox: FC<Props> = ({ note, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState<boolean>(false)
  return (
    <>
      {editing && (
        <NoteEditModal
          currentNote={note}
          onClose={() => setEditing(false)}
          onSubmit={(note) => {
            onUpdate(note)
            setEditing(false)
          }}
          open={editing}
        />
      )}
      <Card sx={{ backgroundColor: note.colorHex }}>
        <CardContent>
          <Typography variant="body1">{note.title}</Typography>
          <Typography variant="body2">{note.content}</Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => setEditing(true)}>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={onDelete}>
              Delete
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  )
}
