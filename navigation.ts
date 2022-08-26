import News from './models/News'

export type RootSackParam = {
  Home: undefined
  Detail: { news: News }
}