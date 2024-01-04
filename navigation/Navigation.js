import React from 'react'
import { ChatBubbleLeftRightIcon, GlobeAltIcon, HomeIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import { ChatBubbleLeftRightIcon as ChatHolo, GlobeAltIcon as GlobeHolo, HomeIcon as HomeIconHolo, UserCircleIcon as UserHolo } from 'react-native-heroicons/outline';

import Chat from '../screens/Chat';
import World from '../screens/World';
import Account from '../screens/Account';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function Navigation (){

    const Tab = createBottomTabNavigator();

    return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ size ,focused}) => 
                {
                  if (focused) {
                    return <HomeIcon name="home" color={"#3b82f6"} size={size+5} />
                  } else{
                    return <HomeIconHolo name="home" color={"#3b82f6"} size={size+5} />
                  } 
                }
            }}
          />
          <Tab.Screen 
            name="CHAT" 
            component={Chat}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ size ,focused}) => 
                {
                  if (focused) {
                    return <ChatBubbleLeftRightIcon name="home" color={"#3b82f6"} size={size+5} />
                  } else{
                    return <ChatHolo name="home" color={"#3b82f6"} size={size+5} />
                  } 
                }
            }}
          />
          <Tab.Screen 
            name="GLOB" 
            component={World}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ size ,focused}) => 
                {
                  if (focused) {
                    return <GlobeAltIcon name="home" color={"#3b82f6"} size={size+5} />
                  } else{
                    return <GlobeHolo name="home" color={"#3b82f6"} size={size+5} />
                  } 
                }
            }}
          />
          <Tab.Screen 
            name="ACCOUNT" 
            component={Account}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ size ,focused}) => 
                {
                  if (focused) {
                    return <UserCircleIcon name="home" color={"#3b82f6"} size={size+5} />
                  } else{
                    return <UserHolo name="home" color={"#3b82f6"} size={size+5} />
                  } 
                }
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
    )
  
}

export default Navigation