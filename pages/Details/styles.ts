import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
`

export const DetailPanel = styled.View`
  background-color: #e74c3c;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin: 15px auto;
`

export const PanelRow = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
`

export const RowKey = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro_700Bold';
  margin-right: 10px;
  color: white;
`

export const RowValue = styled.Text`
  font-size: 16px;
  font-family: 'SourceSansPro_400Regular';
  color: white;
`