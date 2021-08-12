import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

import theme from '../../styles/theme'

import { 
  Container, 
  InputText, 
  IconContainer, 
} from './styles'

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'],
  value?: string
}

export function PasswordInput({ iconName, value, ...rest }: Props){
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const theme = useTheme()

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={ isFocused || isFilled 
            ? theme.colors.main 
            : theme.colors.text_detail }
        />
      </IconContainer>

      <InputText 
        {...rest} 
        isFocused={isFocused}
        secureTextEntry={passwordVisible} 
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <BorderlessButton 
        onPress={() => setPasswordVisible(!passwordVisible)}
        style={{width: 56}}
      >
        <IconContainer isFocused={isFocused}>
          <Feather
            name={passwordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  )
}