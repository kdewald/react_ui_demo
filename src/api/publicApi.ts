import axios from 'axios'
import { PUBLIC_API_BASE_URL } from '../providers/appConfig'

const VARIANTS_RESULTS_PATH = '/extraction'

export const getSampleVariants = async (user: any, query: string) => {
  if (!user) {
    throw new Error('Missing user for public API call')
  }
  const userToken = await user!.getIdTokenResult(true)

  const options = {
    headers: { Authorization: `Bearer ${userToken.token}` },
    timeout: 1000 * 60 * 5, // 5 minutes
  }

  const response = await axios.get(
    `${PUBLIC_API_BASE_URL}${VARIANTS_RESULTS_PATH}?${query}`,
    options,
  )

  return { status: response.status, statusText: response.statusText, data: response.data }
}
