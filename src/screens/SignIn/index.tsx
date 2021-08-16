import React, { useState } from 'react'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native'

import { 
  StatusBar, 
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback, 
  Alert
} from 'react-native'

import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'
import theme from '../../styles/theme'
import { useAuth } from '../../hooks/auth'

import { 
  Container, 
  Header, 
  Title, 
  SubTitle, 
  Footer, 
  Form,
  LoginButton 
} from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const navigation = useNavigation()
  const { signIn } = useAuth()

  async function handleSignIn() {    
    const schema = yup.object().shape({
      email: yup.string()
        .required('E-mail obrigatório')
        .email('Digite um e-mail válido'),
      password: yup.string()
        .required('A senha é obrigatória')        
    })

    try {
      await schema.validate({ email, password })

      signIn({ email, password })
      
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert(error.message)
      } else {
        Alert.alert('Erro na autenticação')
      }
    }
  }
  
  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep')
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

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
            onChangeText={setEmail}
            value={email}
          />
          <PasswordInput 
            iconName="lock"
            placeholder="Senha"
            secureTextEntry
            onChangeText={setpassword}
            value={password}
          />
        </Form>

        <Footer>
          <LoginButton 
            title="Login"
            onPress={handleSignIn}
            enabled={true}
            loading={false}
          />
          <LoginButton 
            title="Criar conta gratuita"
            color={theme.colors.background_secondary}
            onPress={handleNewAccount}
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