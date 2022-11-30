import React, { useCallback, useState } from 'react'
import { useIntl } from 'react-intl'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Basic as Layout } from '../../layouts'
import { useTheme } from '@mui/system'
import SearchBox from './components/SearchBox'
import SearchResults, { TSearchResult } from './components/SearchResults'

const SearchPage = () => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'pages.search'
  const theme = useTheme()

  const [results, setResults] = useState<TSearchResult[]>([])
  const handleSearch = useCallback((prompt: string) => {
    console.log(prompt)
    setResults([
      {
        title: 'Novak Djokovic',
        score: 0.853,
        description:
          'Since the introduction of a new point scale for the ATP rankings from 2009, Djokovic holds the record of 16,950 ranking points, the most ATP points ever accumulated by any player.',
        link: 'https://en.wikipedia.org/wiki/Novak_Djokovic',
      },
      {
        title: 'Novak Djokovic',
        score: 0.853,
        description:
          'Since the introduction of a new point scale for the ATP rankings from 2009, Djokovic holds the record of 16,950 ranking points, the most ATP points ever accumulated by any player.',
        link: 'https://en.wikipedia.org/wiki/Novak_Djokovic',
      },
      {
        title: 'Novak Djokovic',
        score: 0.853,
        description:
          'Since the introduction of a new point scale for the ATP rankings from 2009, Djokovic holds the record of 16,950 ranking points, the most ATP points ever accumulated by any player.',
        link: 'https://en.wikipedia.org/wiki/Novak_Djokovic',
      },
      {
        title: 'Novak Djokovic',
        score: 0.853,
        description:
          'Since the introduction of a new point scale for the ATP rankings from 2009, Djokovic holds the record of 16,950 ranking points, the most ATP points ever accumulated by any player.',
        link: 'https://en.wikipedia.org/wiki/Novak_Djokovic',
      },
      {
        title: 'Novak Djokovic',
        score: 0.853,
        description:
          'Since the introduction of a new point scale for the ATP rankings from 2009, Djokovic holds the record of 16,950 ranking points, the most ATP points ever accumulated by any player.',
        link: 'https://en.wikipedia.org/wiki/Novak_Djokovic',
      },
    ])
  }, [])

  return (
    <Layout sectionTitle={i18n({ id: `${i18nNs}.appbar-title` })}>
      <Container
        maxWidth={false}
        sx={{
          // backgroundColor: theme.palette.background.paper,
          height: 'calc(100vh -20px)',
          color: theme.palette.text.primary,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <SearchBox onSearch={handleSearch} />
          </Grid>
          {!!results?.length && (
            <Grid item xs={12}>
              <SearchResults results={results} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default SearchPage
