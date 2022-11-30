// import { some as _some } from 'lodash'
// import axios from 'axios'
// import { PRIVATE_API_BASE_URL } from '../providers/appConfig'

// const SITES_API_PATH = '/sites'
// const getAssociatedSiteSuggestions = async (user: User, siteId: ISite['id']) => {
//   if (!user) {
//     throw new Error('Missing user for private API call')
//   }

//   const userToken = await user!.getIdTokenResult(true)

//   const options = {
//     headers: { Authorization: `Bearer ${userToken.token}` },
//   }

//   const response = await axios.get<{
//     suggestions: TSuggestedSite[]
//   }>(`${PRIVATE_API_BASE_URL}${SITES_API_PATH}/${siteId}/associated-sites-suggestions`, options)
//   return response.data
// }

export {}
