import { View, Text, Image, TouchableOpacity, Modal, Button, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSubStringByLength } from '../helpers/helper'
import { ChatBubbleOvalLeftIcon, HeartIcon, PaperAirplaneIcon, XCircleIcon } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';

const PostCard = ({ post ,users}) => {

    const[isLiked,setLiked] = useState(false);
    const[isShare,setShare] = useState(false);
    const[isComment,setComment] = useState(false);
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
                        <TouchableOpacity onPress={()=>setComment(true)} className="ml-2" >
                            <ChatBubbleOvalLeftIcon size={33} />
                        </TouchableOpacity>
                    </View>                            
                    <TouchableOpacity onPress={()=>setShare(true)} className="ml-2 -rotate-45" >
                        <PaperAirplaneIcon size={30} />
                    </TouchableOpacity>
                </View>
                <Text className="mt-2">{getSubStringByLength(post.description,50)}</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isShare}>
                <TouchableOpacity
                    className="rounded-lg w-full h-1/2 bg-transparent absolute top-0"
                    onPress={() => setShare(false)}
                    style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}
                 >

                </TouchableOpacity>
                <View className="rounded-lg w-full h-1/2 bg-slate-200 absolute bottom-0 p-5">
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {users.map((user) => ( 
                            <View className="flex-row my-2 mx-3 justify-between">
                                <View className="flex-row">
                                    <Image 
                                        source={{uri: `${user.image}?person-${user.id}`}}
                                        className="w-12 h-12  rounded-full"
                                        />
                                            
                                    <View className="flex mb-2 mx-2 justify-center">
                                        <Text className="text-lg">{user.fullName}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Button
                                        title="Send"
                                        />
                                </View>

                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isComment}>
                <TouchableOpacity
                    className="rounded-lg w-full h-1/2 bg-transparent absolute top-0"
                    onPress={() => setComment(false)}
                    style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}
                 >

                </TouchableOpacity>
                <View className="rounded-lg w-full h-1/2 bg-slate-200 absolute bottom-0">
                        <ScrollView showsVerticalScrollIndicator={false} className="mb-20 p-5">
                            {post.comments.map((comment) => ( 
                                <View className="flex-row my-2 ml-3 justify-between items-center">
                                    <View className="flex-row w-9/12">
                                        <Image 
                                            source={{uri: `${comment.user.image}?person-${comment.user.id}`}}
                                            className="w-12 h-12  rounded-full"
                                            />
                                                
                                        <View className="flex mb-2 mx-2 justify-center">
                                            <Text className="text-lg">{comment.user.fullName}</Text>
                                            <Text className="text-slate-700">{comment.comment}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                        <View className="h-30 mt-5 absolute bottom-0 mb-10 px-2 w-full ">
                        <View
                            className="flex-row items-center bg-slate-300 rounded-full px-3 py-2">
                            <TextInput
                                placeholder='Add comment...'
                                placeholderTextColor='gray'
                                className="mx-3 flex-1 mb-2 h-10 text-lg text-black"
                            />
                            <TouchableOpacity onPress={() => setComment(false)} style={{ marginRight: 2, transform: [{ rotate: '-45deg' }] }}>
                                {/* Use the correct PaperAirplaneIcon component here */}
                                <PaperAirplaneIcon size={30} />
                            </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </Modal>

        </View>
    )
}

export default PostCard