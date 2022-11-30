import axios from 'axios'
import { PRIVATE_API_BASE_URL } from '../providers/appConfig'
import { TSearchResult } from 'src/pages/Search/components/SearchResults'
import { TMyCollection } from 'src/pages/MyCollections/components/MyCollections'

const COLLECTIONS_API_PATH = '/collections'
const collections = {
  get: async () => {
    const options = {
      headers: { Authorization: `Bearer SarasaToken` },
    }

    const response = await axios.get<{
      results: TMyCollection[]
    }>(`${PRIVATE_API_BASE_URL}${COLLECTIONS_API_PATH}`, options)
    return response.data
  },
}

const DOCUMENTS_API_PATH = '/documents'
const documents = {
  search: async (prompt: string) => {
    if (!prompt) {
      throw new Error('A prompt is required')
    }

    const options = {
      headers: { Authorization: `Bearer SarasaToken` },
    }

    const response = await axios.get<{
      results: TSearchResult[]
    }>(`${PRIVATE_API_BASE_URL}${DOCUMENTS_API_PATH}?prompt=${prompt}`, options)
    return response.data
  },
}

export const api = {
  documents: documents,
  collections: collections,
}
