import { PencilSquareIcon, XCircleIcon} from "react-native-heroicons/outline"
import { Image, Modal, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"

const ChatNavbar = ({users}) => {  

    const navigation = useNavigation();
    const [modalVisible,setModalVisible] = useState(false);

  return (
    <SafeAreaView className="pb-2 bg-white">
        <StatusBar barStyle="light"/>
        <View className="flex-row justify-between items-center mx-4">
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <ArrowLeftIcon size="30" className="text-blue-500" />
            </TouchableOpacity>
            
            <Text className="text-black text-3xl font-bold">
                <Text className='text-blue-500 '>M</Text>
                edia
            </Text>

            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <PencilSquareIcon size="30" strokeWidth={2} className="text-blue-500" />
            </TouchableOpacity>
        </View>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <View
                style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}
                className="h-full w-full flex justify-center items-center"
            >
                <View className="w-10/12 my-16 justify-center">
                    <View className="p-3 w-full items-end">
                        <TouchableOpacity onPress={()=>setModalVisible(false)}>
                            <XCircleIcon size={32} color={"#f50a12"}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        className=" rounded-2xl bg-white"
                        showsVerticalScrollIndicator={false}
                    >
                    {users.map((user) => (
                        <View className="flex-row my-2 mx-3 justify-between">
                            <View className="flex-row my-2">
                                <Image
                                    source={{uri: `${user.image}?person-${user.id}`}}
                                    className="w-12 h-12  rounded-full"
                                    />
                                        
                                <View className="flex mb-2 mx-2 justify-center">
                                    <Text className="text-lg">{user.fullName}</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity className="mr-2 rounded-2xl border-2 border-blue-500 p-2">
                                    <Text className="text-blue-500">Message</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>

    </SafeAreaView>
  )
}

export default ChatNavbar