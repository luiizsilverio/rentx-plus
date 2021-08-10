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
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({ iconName, ...rest }: Props){
  const [passwordVisible, setPasswordVisible] = useState(true)

  return (
    <Container>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </IconContainer>

      <InputText {...rest} secureTextEntry={passwordVisible} />

      <BorderlessButton 
        onPress={() => setPasswordVisible(!passwordVisible)}
        style={{width: 56}}
      >
        <IconContainer>
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