import { InformationCircleIcon} from "react-native-heroicons/outline"
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import defaultPerson from "../assets/images/default_person.png"
import { useNavigation } from "@react-navigation/native"

const MessageTopBar = ({data}) => {

    const navigation = useNavigation();
  return (
    <SafeAreaView className="pb-2 bg-white">
        <StatusBar barStyle="light"/>
        <View className="flex-row justify-between items-center mx-4">
            <TouchableOpacity className="flex-row" onPress={()=>navigation.goBack()}>
                <View className="flex-col justify-center mx-2">
                    <ArrowLeftIcon size="25" strokeWidth={2} className="text-blue-500" />
                </View>
                <Image
                    defaultSource={defaultPerson}
                    source={{uri: `${data.user.image}?person-${data.user.id}`}}
                    className="w-10 h-10  rounded-full"
                />
                <View className="flex-col justify-center mx-2">
                    <Text className="text-md font-bold">{data?.user.username}</Text>
                    <Text className="text-md text-slate-700">{data?.user.fullName}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <InformationCircleIcon size="30" strokeWidth={2} className="text-blue-500" />
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default MessageTopBar