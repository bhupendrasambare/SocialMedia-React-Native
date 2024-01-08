import React from 'react';
import { ScrollView, ImageBackground, TouchableOpacity, View } from 'react-native';
import { PlusCircleIcon } from 'react-native-heroicons/outline';
import { UserCircleIcon } from 'react-native-heroicons/solid';

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

        <TouchableOpacity className="flex-shrink-0 my-4 mx-1">
            <View
            className="bg-cover items-center justify-center overflow-hidden w-20 h-20 rounded-full border-4 border-blue-300 "
            >
              <View
              className=" bg-cover items-center justify-center overflow-hidden w-14 h-14 rounded-full border-4 border-blue-400 "
              >
                <PlusCircleIcon
                  className=" border-blue-500"
                  size={40}
                />
              </View>
          </View>
          {/* <ImageBackground
              source={{
                  uri:`${card.image}?${card.imageType}`}}
              className={"bg-cover overflow-hidden w-20 h-20 rounded-full border-4 "+((card.seen)?"border-blue-100":"border-blue-600")}
          >
          </ImageBackground> */}
        </TouchableOpacity>
        
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
