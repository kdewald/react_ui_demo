import React, { useCallback, useState } from 'react'
import { useIntl } from 'react-intl'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Basic as Layout } from '../../layouts'
import { useTheme } from '@mui/system'
import SearchBox from './components/SearchBox'
import SearchResults, { TSearchResult } from './components/SearchResults'
import { api } from 'src/api/internalApi'

const SearchPage = () => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'pages.search'
  const theme = useTheme()

  const [results, setResults] = useState<TSearchResult[]>([])
  const handleSearch = useCallback((prompt: string, onFinish: () => void) => {
    api.documents
      .search(prompt)
      .then(response => {
        setResults(response.results)
      })
      .finally(onFinish)
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
