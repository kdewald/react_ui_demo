import React from 'react'
import { Box, Divider, Link, List, ListItem, ListItemText, Typography } from '@mui/material'

export type TSearchResult = {
  id: string
  collectionId: string
  title: string
  score: number
  description: string
  link: string
}

type Props = {
  results: TSearchResult[]
}

const SearchResults = ({ results }: Props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {results.map((result, i) => {
        return (
          <Box key={`result-${i}`}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <>
                    <Typography variant="subtitle1" sx={{ display: 'inline' }}>
                      <strong>{result.title}</strong>
                    </Typography>
                    <Typography variant="subtitle1" sx={{ display: 'inline' }}>
                      <i> - (Score: {result.score})</i>
                    </Typography>
                  </>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="p"
                      variant="body2"
                      color="text.primary"
                      marginTop={2}
                      marginBottom={2}
                    >
                      {result.description}
                    </Typography>

                    <Link href={result.link} target="_blank">
                      Go to document →
                    </Link>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
          </Box>
        )
      })}
    </List>
  )
}

export default SearchResults
