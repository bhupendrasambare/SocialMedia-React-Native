import {PlusCircleIcon, CameraIcon, Cog8ToothIcon} from "react-native-heroicons/outline"
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AccountNavbar = () => {
  return (
    <SafeAreaView className="pb-2 bg-white">
        <StatusBar barStyle="light"/>
        <View className="flex-row justify-between items-center mx-4">
            <TouchableOpacity >
                <PlusCircleIcon size="30" strokeWidth={2} className="text-blue-500" />
            </TouchableOpacity>
            
            <Text className="text-black text-3xl font-bold">
                <Text className='text-blue-500 '>M</Text>
                edia
            </Text>

            <TouchableOpacity >
                <Cog8ToothIcon size="30" strokeWidth={2} className="text-blue-500" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default AccountNavbar