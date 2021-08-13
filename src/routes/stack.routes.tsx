import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { CarDetails } from '../screens/CarDetails'
import { Schedule } from '../screens/Schedule'
import { ScheduleDetails } from '../screens/ScheduleDetails'
import { Confirmation } from '../screens/Confirmation'
import { MyCars } from '../screens/MyCars'
import { Splash } from '../screens/Splash'
import { SignIn } from '../screens/SignIn'
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep'
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep'

const { Navigator, Screen } = createStackNavigator()

// Rotas públicas *****
export function StackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="SignIn">
      <Screen 
        name="Splash"
        component={Splash}        
      />
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="SignUpFirstStep"
        component={SignUpFirstStep}
      />
       <Screen 
        name="SignUpSecondStep"
        component={SignUpSecondStep}
      />
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="CarDetails"
        component={CarDetails}
      />
      <Screen 
        name="Schedule"
        component={Schedule}
      />
      <Screen 
        name="ScheduleDetails"
        component={ScheduleDetails}
      />
      <Screen 
        name="Confirmation"
        component={Confirmation}
      />
      <Screen 
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  )
}
