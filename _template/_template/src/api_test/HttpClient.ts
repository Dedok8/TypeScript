import IAPIResponse from './IAPIResponse.js'

export default class HttpClient {
  async fetchData(url: string) {
    try {
      const res = await fetch(url)
      return res.json()
    } catch (error) {
      return {
        message: '',
        status: 'fail',
      }
    }
  }
}
