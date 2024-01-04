import { View, Text, Image } from 'react-native'
import React from 'react'
import { getSubStringByLength } from '../helpers/helper'

const PostCard = ({ post }) => {
  return (
    <View>
        <View className="bg-white p-4 mb-4 rounded-md shadow-md">
            <View className="flex-row">
                <Image 
                    source={{uri: `https://source.unsplash.com/random/300x300?person`}}
                    className="w-8 h-8  rounded-full"
                />
                        
                <View className="flex mb-2 mx-2">
                    <Text className="text-blue-500 font-bold text-lg">{post.username}</Text>
                    {post.location && <Text className="text-gray-500">{post.location}</Text>}
                </View>
            </View>
            
            <Image source={{uri:`${post.image}?${post.location}`}} className="w-full h-64 rounded-md" />
            <Text className="mt-2">{getSubStringByLength(post.description,50)}</Text>
        </View>
    </View>
  )
}

export default PostCard