import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

interface Props extends RectButtonProps {
  title: string
  color?: string
  loading?: boolean
  light?: boolean
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props) {
  const theme = useTheme()
  
  return (
    <Container {...rest} 
      color={ color ? color : theme.colors.main } 
      onPress={ onPress }
      enabled={ enabled }
      loading={ loading }
      // style={{ opacity: (!enabled || loading) ? .5 : 1 }}
    >
      { loading ?
        <ActivityIndicator 
          size={"small"} 
          color={theme.colors.shape} 
        />
        :
        <Title light={ light }>{ title }</Title>      
      }
    </Container>
  )
}