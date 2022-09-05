type News = {
  id: string
  image: string
  title: string
  link: string
  author: string
  date: Date
  description: string
}

export const getNews = (obj: any, id: string) => {
  const { urlToImage, title, url, author, publishedAt, description } = obj

  const news: News = {
    id,
    image: urlToImage,
    title,
    link: url,
    author,
    date: new Date(publishedAt),
    description,
  }
  return news
}

export default News
