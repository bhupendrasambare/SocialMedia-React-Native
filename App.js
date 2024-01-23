import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Navigation from './navigation/Navigation'
import { LogBox } from 'react-native';
export class App extends Component {
  render() {
    LogBox.ignoreLogs(['Warning: ...']);
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