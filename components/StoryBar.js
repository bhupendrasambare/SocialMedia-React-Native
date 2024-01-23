import React from 'react';
import { ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { PlusCircleIcon } from 'react-native-heroicons/outline';
import defaultPerson from "../assets/images/default_person.png"

function StoryBar ({cards}) {

  const sortedData = [...cards].sort((a, b) => (a.seen === b.seen ? 0 : a.seen ? 1 : -1));

  const getStoryDetails = (prop) =>{
    
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
        </TouchableOpacity>
        
      {sortedData.map((card) => (
        <TouchableOpacity onPress={()=>getStoryDetails(card)} key={card.id} className="flex-shrink-0 my-4 mx-1">
            <Image
                defaultSource={defaultPerson}
                source={{
                    uri:`${card.image}?${card.imageType}`}}
                className={"bg-cover overflow-hidden w-20 h-20 rounded-full border-4 "+((card.seen)?"border-blue-100":"border-blue-600")}
            >
            </Image>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StoryBar;
