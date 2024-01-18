import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AccountNavbar from '../components/AccountNavbar'
import { ScrollView } from 'react-native-gesture-handler';
import defaultImage from "../assets/images/default_image.png"
import defaultPerson from "../assets/images/default_person.png"
const Account = () => {

  const posts = require('../helpers/posts.json');

  return (
    <View>
    <AccountNavbar/>
    <ScrollView
        showsVerticalScrollIndicator={false}
    className="h-full mb-8">
    {/* View for profile image and numbers */}
        <View className="bg-white w-full flex-row justify-between pt-5 px-2">
            <TouchableOpacity className="flex-shrink-0 my-4 mx-1">
                <Image
                defaultSource={defaultPerson}
                source={{uri: `https://source.unsplash.com/random/300x300?men`}}
                className="bg-cover overflow-hidden w-24 h-24 rounded-full border-4 border-blue-600"
                />
            </TouchableOpacity>
            <View className="flex-row justify-evenly items-center">
                <View className="flex-col items-center mx-3">
                    <Text className="font-bold text-xl">20</Text>
                    <Text className="text-lg">Posts</Text>
                </View>
                <View className="flex-col items-center mx-3">
                    <Text className="font-bold text-xl">157</Text>
                    <Text className="text-lg">Followers</Text>
                </View>
                <View className="flex-col items-center mx-3">
                    <Text className="font-bold text-xl">256</Text>
                    <Text className="text-lg">Following</Text>
                </View>
            </View>
        </View>
        {/* Name and details */}
        <View className="pb-5 px-2 bg-white">
            <Text className="text-lg font-bold">Bhupendra sambare</Text>
            <Text className="text-base text-slate-800">Web Developer</Text>
            <Text className="text-sm  mr-8">
                {"I am Java web developer \nMoving forward to Web and Application developement exploring the world of developement"}
            </Text>
        </View>
        {/* Posts */}
        <View className="bg-white flex-wrap flex-row">
            {
                posts.map((data)=>{
                    return (
                        <TouchableOpacity className="h-36 border-gray-100 w-4/12  p-1">
                            <Image
                                defaultSource={defaultImage}
                                source={{uri: `${data.image}?${data.imageType}`}}
                                className="bg-cover overflow-hidden w-full h-full"
                            />
                        </TouchableOpacity>
                    )
                })
            }
        </View>

    </ScrollView>
    </View>
  )
}

export default Account