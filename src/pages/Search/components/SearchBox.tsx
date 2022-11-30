import React, { useCallback, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import LoadingButton from '@mui/lab/LoadingButton'

type Props = {
  onSearch: (prompt: string, onFinish: () => void) => void
}

const SearchBox = ({ onSearch }: Props) => {
  const [loading, setLoading] = useState(false)

  const [prompt, setPrompt] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value)
  }

  const handleClick = useCallback(() => {
    setLoading(true)
    onSearch(prompt, () => {
      setLoading(false)
    })
  }, [onSearch, prompt])

  return (
    <>
      {/* <Typography variant="h5">Contextual search</Typography> */}
      <Typography variant="body1" marginBottom={2}>
        Ask a question and let us find the appropriate references in your documents corpus
      </Typography>
      <TextField
        id="filled-textarea"
        label="Your question"
        fullWidth
        size="small"
        rows={2}
        placeholder="Write your question here"
        multiline
        variant="outlined"
        value={prompt}
        onChange={handleChange}
      />
      <LoadingButton
        color="primary"
        size="small"
        fullWidth
        sx={{ marginTop: 1 }}
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SearchIcon />}
        variant="contained"
      >
        {loading ? 'Searching' : 'Search'}
      </LoadingButton>
    </>
  )
}

export default SearchBox
