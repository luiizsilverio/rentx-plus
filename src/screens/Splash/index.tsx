import React, { useState } from 'react'
import { Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'
import { Container } from './styles'

export function Splash(){
  const navigation = useNavigation()
  
  useState(() => {
    function startApp() {
      navigation.navigate('Home')
    }

    setTimeout(() => {
      startApp()
    }, 2000);
  })

  return (
    <Container>
      <LogoSvg width={180} height={20} />
    </Container>
  )
}
