import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSubStringByLength } from '../helpers/helper'
import { ChatBubbleOvalLeftIcon, HeartIcon, PaperAirplaneIcon } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';

const PostCard = ({ post }) => {

    const[isLiked,setLiked] = useState(false);
    const[makeLikeAnimation,setLikeAnimation] = useState(false);

    const makeLike = ()=>{
        if(!isLiked){
            setLikeAnimation(true)
            setTimeout(function() {
                setLikeAnimation(false)
            }, 2000);
        }
        setLiked(!isLiked);
    }


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
                <View className="relative">

                    <Image 
                        source={{uri: `${post.image}?${post.location}`}} 
                        className="w-full h-64 mx-auto mb-2 rounded-md z-0"
                    />

                    {
                        makeLikeAnimation && 
                        <TouchableOpacity className="absolute top-0 left-0 w-full h-64 justify-center items-center">
                            <HeartSolid size={120} color={"white"} />
                        </TouchableOpacity>
                    }
                </View>
                
                <View className="flex-row justify-between my-1 mx-3">
                    <View className="flex-row ">
                        {
                            (isLiked)?
                            (
                                <TouchableOpacity onPress={makeLike}>
                                    <HeartSolid size={33} color={"red"}/>
                                </TouchableOpacity>
                                ):
                                (<TouchableOpacity onPress={makeLike}>
                                    <HeartIcon size={33} color={"red"}/>
                                </TouchableOpacity>
                                )
                            }
                        <TouchableOpacity className="ml-2" >
                            <ChatBubbleOvalLeftIcon size={33} />
                        </TouchableOpacity>
                    </View>                            
                    <TouchableOpacity className="ml-2 -rotate-45" >
                        <PaperAirplaneIcon size={30} />
                    </TouchableOpacity>
                </View>
                <Text className="mt-2">{getSubStringByLength(post.description,50)}</Text>
            </View>
        </View>
    )
}

export default PostCard