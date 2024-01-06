import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';

const Chat = () => {

    const [isMessage,setIsMessage] = useState(true);

  return (
    <View className="bg-white">
        <Navbar/>
        <View className="flex-row justify-around items-center mt-3">
            <TouchableOpacity className="w-1/2" onPress={()=>setIsMessage(true)}>
                <View className={(isMessage)?("pb-2 border-b-4 border-blue-500"):("pb-3 ")}>
                    <Text className="text-xl text-center">Messages</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="w-1/2" onPress={()=>setIsMessage(false)}>
                <View className={(!isMessage)?("pb-2 border-b-4 border-blue-500"):("pb-3 ")}>
                    <Text className="text-xl text-center">Groups</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Chat