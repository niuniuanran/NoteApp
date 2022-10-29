import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Typography,
  Stack,
} from '@mui/material'
import { FC, useState } from 'react'
import { Note } from './types'
import { CirclePicker } from 'react-color'

interface Props {
  currentNote?: Note
  onClose: () => void
  onSubmit: (note: Note) => void
  open: boolean
}
export const NoteEditModal: FC<Props> = ({
  open,
  currentNote,
  onClose,
  onSubmit,
}) => {
  const [note, setNote] = useState<Note>(
    currentNote || { title: '', content: '', colorHex: '#f44336' }
  )
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: note.colorHex, marginBottom: '1em' }}>
        {currentNote ? 'Edit your note' : 'Create a new note'}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            variant="outlined"
            value={note.title}
            onChange={(event) =>
              setNote((note) => ({ ...note, title: event.target.value }))
            }
            required
          />
          <TextField
            variant="outlined"
            autoFocus
            multiline
            rows={4}
            margin="dense"
            id="content"
            label="Content"
            fullWidth
            value={note.content}
            onChange={(event) =>
              setNote((note) => ({ ...note, content: event.target.value }))
            }
            required
          />
          <FormControl>
            <Typography variant="caption">Background color</Typography>
            <CirclePicker
              color={note.colorHex}
              onChangeComplete={(color) =>
                setNote((note) => ({ ...note, colorHex: color.hex }))
              }
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => onSubmit(note)}
          disabled={!(note.content && note.title)}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
