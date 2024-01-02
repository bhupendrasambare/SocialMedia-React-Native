import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import {Bars3BottomLeftIcon} from "react-native-heroicons/solid"
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"

export class App extends Component {
  render() {
    return (
    //   <SafeAreaView>
        <SafeAreaView className="flex-row justify-between items-center p-4">
            {/* Section 1 */}
            <View className="flex-1 px-2">
                <Bars3BottomLeftIcon color="black" stroke={5} size={30}/>
            </View>
    
            {/* Section 2 */}
            <View className="flex-1">
                <Text className="text-black">Section 2</Text>
            </View>
    
            {/* Section 3 */}
            <View className="flex-1 items-end px-2">
                <MagnifyingGlassIcon color="black" size={30}/>
            </View>
        </SafeAreaView>
    //   </SafeAreaView>
    )
  }
}

export default App