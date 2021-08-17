import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'

import { 
  Alert,
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback 
} from 'react-native'

import { BackButton } from '../../components/BackButton'
import { Bullet } from '../../components/Bullet'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { 
  Container, 
  Header, 
  BulletContainer,
  Title,
  SubTitle,
  Form,
  FormTitle  
} from './styles'

export function SignUpFirstStep(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cnh, setCnh] = useState('')

  const navigation = useNavigation()
 
  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        cnh: Yup.string()
          .required('CNH é obrigatório'),
        email: Yup.string()
          .email('Email inválido')
          .required('E-mail é obrigatório'),
        name: Yup.string()
          .required('Nome é obrigatório'),
      })
      
      const data = { name, email, cnh }
      await schema.validate(data)

      navigation.navigate('SignUpSecondStep', { user: data })

    } catch(error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message)
      } else {
        Alert.alert('Erro na autenticação')
      }
    }
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
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setCnh}
              value={cnh}
            />        
          </Form>

          <Button 
            title="Próximo"
            onPress={handleNextStep}
          />
        </Container>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}