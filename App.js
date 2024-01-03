import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import {Bars3BottomLeftIcon} from "react-native-heroicons/solid"
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"
import Navbar from './components/Navbar'

export class App extends Component {
  render() {
    return (
        <SafeAreaView>
            <View className="">
                <Navbar/>    
            </View>
        </SafeAreaView>
    )
  }
}

export default App