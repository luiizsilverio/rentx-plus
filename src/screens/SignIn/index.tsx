import React from 'react'

import { 
  StatusBar, 
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback } from 'react-native'

import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'
import theme from '../../styles/theme'

import { 
  Container, 
  Header, 
  Title, 
  SubTitle, 
  Footer, 
  Form,
  LoginButton 
} from './styles'

export function SignIn(){
  return (
    <KeyboardAvoidingView 
      behavior="position" enabled
    >

      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
      >

      <Container>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <Header>
          <Title>Estamos{ '\n' }quase lá.</Title>
          <SubTitle>
            Faça seu login para começar { '\n' }
            uma experiência incrível.
          </SubTitle>
        </Header>

        <Form>
          <Input 
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <PasswordInput 
            iconName="lock"
            placeholder="Senha"
            secureTextEntry
          />
        </Form>

        <Footer>
          <LoginButton 
            title="Login"
            onPress={() => {}}
            enabled={false}
            loading={false}
          />
          <LoginButton 
            title="Criar conta gratuita"
            color={theme.colors.background_secondary}
            onPress={() => {}}
            enabled={true}
            loading={false}
            light
          />
        </Footer>

      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)
}