import { useFonts, SourceSansPro_400Regular, SourceSansPro_700Bold } from '@expo-google-fonts/source-sans-pro'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen'
import { RootSackParam } from './navigation'
import Details from './pages/Details'
import Home from './pages/Home'


const Stack = createNativeStackNavigator<RootSackParam>()
const App = () => {
  const [fontsLoaded] = useFonts({ SourceSansPro_400Regular, SourceSansPro_700Bold })

  SplashScreen.preventAutoHideAsync()

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={() => SplashScreen.hideAsync()}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Eleições 2022' }}
        />
        <Stack.Screen
          name='Detail'
          component={Details}
          options={({ route }: any) => ({ title: route.params.news.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


