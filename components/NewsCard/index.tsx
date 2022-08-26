import News from "../../models/News"
import { Container, Image, Title } from './styles'

type Props = {
  newsElectoral: News
}

const NewsCard = ({ newsElectoral }: Props) => {
  return (
    <Container>
      <Image souce={newsElectoral.image} />
      <Title>{newsElectoral.title}</Title>
    </Container>
  )
}

export default NewsCard