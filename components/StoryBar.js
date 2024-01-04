import React from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { getSubStringByLength } from '../helpers/helper';

function StoryBar ({cards}) {

  const sortedData = [...cards].sort((a, b) => (a.seen === b.seen ? 0 : a.seen ? 1 : -1));
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerclassName="p-4"
    >
      {sortedData.map((card) => (
        <TouchableOpacity key={card.id} className="flex-shrink-0 my-4 mx-1">
            <ImageBackground
                source={{
                    uri:`${card.image}?${card.imageType}`}}
                className={"bg-cover rounded-lg overflow-hidden w-32 h-64 border-4 "+((card.seen)?"border-blue-200":"border-blue-500")}
            >
                <View className="bg-black/20 p-4 flex-1 w-50">
                <Text
                className="text-white text-base w-50 font-semibold mb-2 absolute bottom-0 right-0 left-0 mx-2">
                    {getSubStringByLength(card.imageType,12)}
                </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StoryBar;
