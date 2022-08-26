import axios from 'axios'
import News, { getNews } from '../models/News'

const API_URL = 'https://newsapi.org/v2'
const NEWS_ENDPOINT = '/everything'
const COINS_AMOUNT = 78
const PER_PAGE = 10

const http = axios.create({
  baseURL: API_URL,
})

export const fetchNews = async (page: number): Promise<News[]> => {
  if (page < 1 || page > Math.ceil(COINS_AMOUNT / PER_PAGE)) {
    return []
  }

  const resultNews = await http.get(NEWS_ENDPOINT, {
    params: {
      q: 'eleições',
      from: '2022-08-19',
      sortBy: 'popularity',
      apikey: '17d025d32f3c4d7c86f79a1206ac7413'
    }
  })

  const news: News[] = resultNews.data.map((obj: any) => getNews(obj, `${new Date().getTime()}`))
  return news
}