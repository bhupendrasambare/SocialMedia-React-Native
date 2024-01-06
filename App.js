import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Navigation from './navigation/Navigation'

export class App extends Component {
  render() {
    return (
        <SafeAreaView>
          <View className="h-full">
              <Navigation/>
          </View>
        </SafeAreaView>
    )
  }
}

export default App