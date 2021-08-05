import React from 'react'
import { StatusBar } from 'react-native'

import { Input } from '../../components/Input'
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
  )
}