import React from 'react';
import { ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

function StoryBar ({cards}) {

  const sortedData = [...cards].sort((a, b) => (a.seen === b.seen ? 0 : a.seen ? 1 : -1));

  const getStoryDetails = (prop) =>{
    console.log(prop)
  }

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerclassName="p-4"
    >
      {sortedData.map((card) => (
        <TouchableOpacity onPress={()=>getStoryDetails(card)} key={card.id} className="flex-shrink-0 my-4 mx-1">
            <ImageBackground
                source={{
                    uri:`${card.image}?${card.imageType}`}}
                className={"bg-cover overflow-hidden w-20 h-20 rounded-full border-4 "+((card.seen)?"border-blue-100":"border-blue-600")}
            >
                {/* <View className="bg-black/20 p-4 flex-1 w-50">
                  <Text
                  className="text-white text-base w-50 font-semibold mb-2 absolute bottom-0 right-0 left-0 mx-2">
                      {getSubStringByLength(card.imageType,12)}
                  </Text>
                </View> */}
            </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StoryBar;
