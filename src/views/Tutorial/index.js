import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ActivityIndicator } from 'react-native'
import { Bg } from '../../components'
import * as C from './styles'
import AppIntroSlider from 'react-native-app-intro-slider'
import trophy from '../../assets/Trophy-min.png'
import words from '../../assets/words-min.png'
import images from '../../assets/images-min.png'
import send from '../../assets/send-min.png'

const slides = [
  {
    key: '2',
    title: 'Um novo jogo social',
    text:
      'Um jogo social onde você e seus\namigos vão competir em busca de\npontos e status',
    image: trophy
  },
  {
    key: '3',
    title: 'Um novo jogo social',
    text:
      'Escolha uma das palavras sorteadas\npara você, quanto mais alto a\ndificuldade, maior será a\nrecompensa',
    image: words
  },
  {
    key: '4',
    title: 'Um novo jogo social',
    text:
      'Tire quatro fotos que represente ou\nlembre de alguma forma a palavra\nescolhida',
    image: images
  },
  {
    key: '5',
    title: 'Um novo jogo social',
    text:
      'Envie para seus amigos e veja se eles\nconseguem adivinhar qual é a\npalavra',
    image: send
  }
]

export default function Tutorial({ navigation }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  function _renderItem({ item }) {
    return (
      <C.Item>
        <C.ImageContainer>
          <C.Image source={item.image} resizeMode={'contain'} />
          <C.TextContainer>
            <C.Title>{item.title}</C.Title>
            <C.Subtext>{item.text}</C.Subtext>
          </C.TextContainer>
        </C.ImageContainer>
      </C.Item>
    )
  }

  function nextButton() {
    return (
      <C.ButtonCircle>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </C.ButtonCircle>
    )
  }

  function doneButton() {
    return (
      <C.ButtonCircle>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </C.ButtonCircle>
    )
  }

  return (
    <Bg>
      {loading ? (
        <C.Inciator>
          <ActivityIndicator size="large" color="#fff" />
        </C.Inciator>
      ) : (
        <>
          <C.LogoContainer>
            <C.Logo />
          </C.LogoContainer>
          <AppIntroSlider
            renderItem={_renderItem}
            slides={slides}
            renderNextButton={nextButton}
            renderDoneButton={doneButton}
            onDone={() => navigation.navigate('Home')}
          />
        </>
      )}
    </Bg>
  )
}
