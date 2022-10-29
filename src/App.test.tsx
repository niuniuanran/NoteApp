import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Anran Note App', () => {
  test('Can open new note modal', () => {
    render(<App />)
    const addNoteButton = screen.getByText('Add new note')
    userEvent.click(addNoteButton)
    expect(screen.getByText('Create a new note')).toBeVisible()
  })
  test('Can open edit note modal', () => {
    render(<App />)
    const editButtons = screen.getAllByText('Edit')
    expect(editButtons).toHaveLength(2)
    userEvent.click(editButtons[0])
    expect(screen.getByText('Edit your note')).toBeVisible()
  })
})
