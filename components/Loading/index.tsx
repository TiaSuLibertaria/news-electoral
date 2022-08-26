import { ActivityIndicator } from 'react-native'
import { LoadingArea } from './styles'

const Loading = () => {
  return (
    <LoadingArea>
      <ActivityIndicator size='large' color='#555' />
    </LoadingArea>
  )
}
export default Loading