import {Bars3BottomLeftIcon} from "react-native-heroicons/solid"
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <SafeAreaView className="mb-2">
        <StatusBar barStyle="light"/>
        <View className="flex-row justify-between items-center mx-4 bg">
            <Bars3BottomLeftIcon size="30" className="text-blue-500" />

            <Text className="text-black text-3xl font-bold">
                <Text className='text-blue-500 '>M</Text>
                edia
            </Text>

            <TouchableOpacity >
                <MagnifyingGlassIcon size="30" strokeWidth={3} className="text-blue-500" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Navbar