import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { CarDetails } from '../screens/CarDetails'
import { Schedule } from '../screens/Schedule'
import { ScheduleDetails } from '../screens/ScheduleDetails'
import { Confirmation } from '../screens/Confirmation'
import { MyCars } from '../screens/MyCars'

const { Navigator, Screen } = createStackNavigator()

// Rotas autenticadas
export function AppStackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Home">      
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

{/* <Screen 
      name="Splash"
      component={Splash}        
    /> */}
    