import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import NewsCard from '../../components/NewsCard'
import News from '../../models/News'
import { RootSackParam } from '../../navigation'
import { fetchNews } from '../../services/NewService'
import { Container } from './styles'

type Props = NativeStackScreenProps<RootSackParam, 'Home'>

const Home = ({ navigation }: Props) => {
  const [news, setNews] = useState<News[]>([])
  const [page, setPage] = useState(1)

  const LoadNews = async () => {
    let loadNews = await fetchNews(page)
    loadNews = [...news, ...loadNews]
    setNews(loadNews)
  }

  useEffect(() => {
    LoadNews()
  }, [page])

  const renderNews: ListRenderItem<News> = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => navigation.push('Detail', { news: item })}>
      <NewsCard newsElectoral={item} />
    </TouchableOpacity>
  )

  return (
    <Container>
      <FlatList<News>
        data={news}
        renderItem={renderNews}
        onEndReachedThreshold={0.01}
        onEndReached={() => setPage(page + 1)}
      />
    </Container>
  )
}


export default Home