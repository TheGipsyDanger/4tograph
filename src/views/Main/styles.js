import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 88
  }
})`
  flex: 1;
  margin: 0px 20px;
`
