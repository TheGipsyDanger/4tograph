import React, { useState, useEffect } from 'react'
import {
  Container,
  Item,
  ImageContainer,
  LogoContainer,
  Logo,
  Image,
  TextContainer,
  Title,
  Subtext,
  ButtonCircle
} from './styles'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider'
import PropTypes from 'prop-types'

const slides = [
  {
    key: '2',
    title: 'Um novo jogo social',
    text:
      'Um jogo social onde você e seus\namigos vão competir em busca de\npontos e status',
    image: require('../../assets/Trophy.png')
  },
  {
    key: '3',
    title: 'Um novo jogo social',
    text:
      'Escolha uma das palavras sorteadas\npara você, quanto mais alto a\ndificuldade, maior será a\nrecompensa',
    image: require('../../assets/words.png')
  },
  {
    key: '4',
    title: 'Um novo jogo social',
    text:
      'Tire quatro fotos que represente ou\nlembre de alguma forma a palavra\nescolhida',
    image: require('../../assets/images.png')
  },
  {
    key: '5',
    title: 'Um novo jogo social',
    text:
      'Envie para seus amigos e veja se eles\nconseguem adivinhar qual é a\npalavra',
    image: require('../../assets/send.png')
  }
]

export default function Tutorial() {
  function _renderItem({ item }) {
    return (
      <Item>
        <ImageContainer>
          <Image source={item.image} resizeMode={'contain'} />
          <TextContainer>
            <Title>{item.title}</Title>
            <Subtext>{item.text}</Subtext>
          </TextContainer>
        </ImageContainer>
      </Item>
    )
  }

  function nextButton() {
    return (
      <ButtonCircle>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </ButtonCircle>
    )
  }

  function doneButton() {
    return (
      <ButtonCircle>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </ButtonCircle>
    )
  }

  return (
    <Container>
      <LogoContainer>
        <Logo
          source={require('../../assets/Logo.png')}
          resizeMode={'contain'}
        />
      </LogoContainer>
      <AppIntroSlider
        renderItem={_renderItem}
        slides={slides}
        renderNextButton={nextButton}
        renderDoneButton={doneButton}
      />
    </Container>
  )
}

Tutorial.defaultProps = {}

Tutorial.propTypes = {}
