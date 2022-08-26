import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootSackParam } from '../../navigation'
import { Container, DetailPanel, PanelRow, RowKey, RowValue } from './styles'

type Props = NativeStackScreenProps<RootSackParam, 'Detail'>

const Details = ({ route }: Props) => {
  const { news } = route.params

  return (
    <Container>

      <DetailPanel>

        <PanelRow>
          <RowKey>Título:</RowKey>
          <RowValue>{news.title}</RowValue>
        </PanelRow>

        <PanelRow>
          <RowKey>Autor:</RowKey>
          <RowValue>{news.author}</RowValue>
        </PanelRow>

        <PanelRow>
          <RowKey>Data da Publicação:</RowKey>
          <RowValue>{news.date.toLocaleDateString()}</RowValue>
        </PanelRow>

        <PanelRow>
          <RowKey>Descrição:</RowKey>
          <RowValue>{news.description}</RowValue>
        </PanelRow>

        <PanelRow>
          <RowKey>Link:</RowKey>
          <RowValue>{news.link}</RowValue>
        </PanelRow>

      </DetailPanel>

    </Container>
  )
}

export default Details