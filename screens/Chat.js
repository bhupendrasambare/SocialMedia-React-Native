import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { getSubStringByLength } from '../helpers/helper';

const Chat = () => {

    const [isMessage,setIsMessage] = useState(true);
    const messages = require('../helpers/message.json');
    
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
        <ScrollView showsVerticalScrollIndicator={false} className="h-full ">
            
            {messages.map((msg) => (
                <TouchableOpacity>
                    <View className="flex-row my-2 mx-3 justify-between">
                        <View className="flex-row my-2">
                            <Image
                                source={{uri: `${msg.user.image}?person-${msg.user.id}`}}
                                className="w-12 h-12  rounded-full"
                                />
                                    
                            <View className="flex mb-2 mx-2 justify-center">
                                <Text className="text-lg">{msg.user.fullName}</Text>
                                <Text className="text-md text-slate-500">
                                    {getSubStringByLength(msg.messages[0].message,40)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
            ))}

        </ScrollView>
    </View>
  )
}

export default Chat