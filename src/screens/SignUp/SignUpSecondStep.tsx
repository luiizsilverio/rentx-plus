import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { 
  Alert,
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback 
} from 'react-native'

import { BackButton } from '../../components/BackButton'
import { Bullet } from '../../components/Bullet'
import { PasswordInput } from '../../components/PasswordInput'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components'
import api from '../../services/api'

import { 
  Container, 
  Header, 
  BulletContainer,
  Title,
  SubTitle,
  Form,
  FormTitle  
} from './styles'

interface Params {
  user: {
    name: string
    email: string
    cnh: string
  }
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const { user } = route.params as Params

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert('Informe a senha e a confirmação')
    }
    if (password !== passwordConfirm) {
      return Alert.alert('Senhas não conferem')
    }

    await api.post('/users/', {
      name: user.name,
      email: user.email,
      driver_license: user.cnh,
      password
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        title: "Conta Criada!",
        message: "Agora é só fazer login \n e aproveitar.",
        nextScreen: "SignIn"
      })    
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível cadastrar')
    })
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
        <Container>
          <Header>
            <BackButton />
            <BulletContainer>
              <Bullet active />
              <Bullet />
              <Bullet />
            </BulletContainer>
          </Header>

          <Title>Crie sua {'\n'} conta</Title>
          <SubTitle>
            Faça seu cadastro de {'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value="password"
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"      
              value="passwordConfirm"
              onChangeText={setPasswordConfirm}        
            />              
          </Form>

          <Button 
            title="Próximo"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}