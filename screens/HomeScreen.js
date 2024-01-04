import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import StoryBar  from '../components/StoryBar'
import PostCard from '../components/PostCard';

function HomeScreen (){

  const cards = require('../helpers/stories.json');
  const posts = require('../helpers/posts.json');

  const scrollViewRef = useRef();
  const [isTopButtonActive, setIsTopButtonActive] = useState(false);

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setIsTopButtonActive(scrollY > 3000);
  };

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerclassName="p-4"
        className="bg-white h-full"
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={50}
        >
            <StoryBar cards={cards}/>
            {posts.map((post) => (
                <PostCard post={post}/>   
            ))}

        </ScrollView>

        {isTopButtonActive && (
            <TouchableOpacity onPress={scrollToTop} className="absolute top-0 items-center w-full">
            <View className="bg-blue-500 rounded-full mt-4">
                <Text className="text-center px-4 py-2 text-white ">↑ Top</Text>
            </View>
            </TouchableOpacity>
        )}
    </View>
  )
}

export default HomeScreen